const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');

const authVar = require('../env_variables/env_vars.json')
const auth = require('../middlewares/token_auth');
const premiumCheck = require('../middlewares/premium_auth');

var ObjectId = require('mongoose').Types.ObjectId;

/**
 *  @module playlistRoutes
 */
const playlistRoutes = (app, fs, songModel, propertyModel, playlistModel) => {
  
  /**
   * Create Playlist: Create a playlist in database 
   * @name post/createPlaylist
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} name - The name of playlist
   * @param {token} token - the token of user
   */

  app.post('/createPlaylist', auth, (req, res, next) => {

    if (!req.body.name) {
      req.body.name = 'New Playlist';
    }
    playlistModel.create({name: req.body.name, type: "userCreated", creator: req.userId}).then((Playlist) => {
      res.json(Playlist); 
    }).catch(next);
  })
  

   /**
   * Get Playlist: Get into a playlist
   * @name get/playlist/:playlistId
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} id - The id of playlist
   */
  app.get('/playlist/:playlistId', (req, res) => {
    mongoose.connection.db.collection('playlists',function(err, collection){
      collection.find({_id: new ObjectId(req.params.playlistId)}).toArray((err, Playlist) => {
        arr = []

        for (var i = 0; i < Playlist[0].songs.length; i++) {
          arr.push(Playlist[0].songs[i])
        }

        mongoose.connection.db.collection('songs',function(err, collection2){
          collection2.find({name:{ $in: arr}}).toArray(function(err,docs2){

            if (err) {
                throw err;
            }
            res.send(docs2);
          });
        })
      });
    })
  });

   /**
   * Like Playlist: Adds the id of an existing playlist to the liking user and the id of him/her to the liked playlist, in case playlist is liked, it ulikes it and vice versa
   * @name put/playlist/:id
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} id - the id of playlist
   * @param {token} token - the token of user
   */
  app.put('/playlist/:id', auth, (req, res) => {
    mongoose.connection.db.collection('users', (err, userModel) =>{
      userModel.find({_id: new ObjectId(req.userId)})
      .toArray((err, User) => {
        if (err) {
          res.sendStatus(403);
        } else {
          var playlistIsLiked = false;
          var string1 = '1';
          var string2 = '2';
          var comparison = 10;
          for (i = 0; i < User[0].likedPlaylists.length; i++) {
            string1 = (User[0].likedPlaylists[i]).toString();
            string2 = (req.params.id).toString();
            comparison = string1.localeCompare(string2);
            if (comparison === 0) {
              playlistIsLiked = true;
            };
          };
          if (!playlistIsLiked) {
            playlistModel.updateOne({_id: req.params.id}, {$push: {followers: req.userId}}).then(() => {})
            userModel.updateOne({_id: new ObjectId(req.userId)}, {$push: {likedPlaylists: req.params.id}}, () => {
              res.json({
                message: "Liked"
              }); 
            })
          } else {
            playlistModel.updateOne({_id: req.params.id}, {$pull: {followers: req.userId}}).then(() => {
              userModel.updateOne({_id: new ObjectId(req.userId)}, {$pull: {likedPlaylists: req.params.id}}, () => {
                res.json({
                  message: "Unliked"
                });
              })
            })
          };
        }
      });
    });
  });

  /**
   * Get trending playlist: playlist created in database updated with songs played the most
   * @name get/playlist/trending
   * @function
   * @memberof module:playlistRoutes
   * @inner
   */
  app.get('/playlist/trending', (req, res) => {
    var trendPlaylist;
    playlistModel.findOne({type: "trending", name: "Trending"}).then((Playlist) => {
      trendPlaylist = Playlist;
    }).then(() => {
      songModel.aggregate(
        [
          {$sort: {timesPlayed: -1}},
          {$limit: 50}
        ]
      ).then((Song) => {
        for (i = 0; i < Song.length; i++) {
          playlistModel.updateOne({_id: trendPlaylist._id}, {$pop: {songs: 1}}).then(() => {});
        }
        for (i = 0; i < Song.length; i++) {
          playlistModel.updateOne({_id: trendPlaylist._id}, {$push: {songs: Song[i].name}}).then(() => {});
        }
      }).then(() => {
        playlistModel.findOne({_id: trendPlaylist._id}).then((Playlist) => {
          res.json(Playlist);
        });
      });
    });
  });

   /**
   * Get highest-rated playlist
   * @name get/playlist/highestRated
   * @function
   * @memberof module:playlistRoutes
   * @inner
   */
  app.get('/playlist/highestRated', (req, res) => {
    playlistModel.aggregate(
      [
        {$sort: {rating: -1}},
        {$limit: 1}
      ]
    ).then((Playlist) => {
      res.json(Playlist[0])
    });
  });

  /**
   * Generate random playlists
   * @name get/playlist/random
   * @function
   * @memberof module:playlistRoutes
   * @inner
   */
  app.get('/playlist/random', (req, res) => {
    var playlistId = 0;
    songModel.aggregate(
      [
        {$sample: {size: 20}}
      ]
    ).then((Song) => {
      playlistModel.create({name: "Random Playlist", type: "random"}).then((Playlist) => {
        playlistId = Playlist._id;
        for (i = 0; i < Song.length; i++) {
          playlistModel.updateOne({_id: Playlist._id}, {$push: {songs: Song[i].name}}).then(() => {});
        }
      }).then(() => {
        playlistModel.findOne({_id: playlistId}).then((Playlist) => {
          res.json(Playlist);
        });
      });
    });
  });

  /**
   * Get region playlists: Each region has a playlist created in database called "Top in 'region'" updated with region songs played the most
   * Name of region is passed in query string => ?region=Egypt for example
   * @name get/playlist/region
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} name - name of region
   */
  app.get('/playlist/region', (req, res) => {
    var qString = req.query;
    var reg;
    var regPlaylist;
    propertyModel.findOne({type: "Region", name: qString.region.toString()}).then((Property) => {
      reg = Property;
    }).then(() => {
      playlistModel.findOne({type: "region", name: "Top in "+ reg.name}).then((Playlist) => {
        regPlaylist = Playlist;
      }).then(() => {
        songModel.aggregate(
          [
            {$match: {region: reg.name}},
            {$sort: {timesPlayed: -1}},
            {$limit: 20}
          ]
        ).then((Song) => {
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: regPlaylist._id}, {$pop: {songs: 1}}).then(() => {});
          }
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: regPlaylist._id}, {$push: {songs: Song[i].name}}).then(() => {});
          }
        }).then(() => {
          playlistModel.findOne({_id: regPlaylist._id}).then((Playlist) => {
            res.json(Playlist);
          });
        });
      });
    });
  });

   /**
   * Get genre-based playlists: Each genre has a playlist for it created in database updated with songs having same genre
   * Name of genre is passed in query string => ?genre=Arabic for example
   * @name get/playlist/genre
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} name - name of genre
   */
  app.get('/playlist/genre', (req, res) => {
    var qString = req.query;
    var genreProp;
    var genPlaylist;
    propertyModel.findOne({type: "Genre", name: qString.genre.toString()}).then((Property) => {
      genreProp = Property;
    }).then(() => {
      playlistModel.findOne({type: "genreBased", genre: genreProp.name}).then((Playlist) => {
        genPlaylist = Playlist;
      }).then(() => {
        songModel.aggregate(
          [
            {$match: {genre: genreProp.name}},
            {$sample: {size: 20}}
          ]
        ).then((Song) => {
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: genPlaylist._id}, {$pop: {songs: 1}}).then(() => {});
          }
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: genPlaylist._id}, {$push: {songs: Song[i].name}}).then(() => {});
          }
        }).then(() => {
          playlistModel.findOne({_id: genPlaylist._id}).then((Playlist) => {
            res.json(Playlist);
          });
        });
      });
    });
  });

 /**
   * Get mood-based playlists: Each mood has a playlist created for it in database updated with songs having same mood
   * Name of mood is passed in query string => ?mood=Happy for example
   * @name get/playlist/mood
   * @function
   * @memberof module:playlistRoutes
   * @inner
   * @param {string} name - name of mood
   */
  app.get('/playlist/mood', (req, res) => {
    var qString = req.query;
    var moodProp;
    var moodPlaylist;
    propertyModel.findOne({type: "mood", name: qString.mood.toString()}).then((Property) => {
      moodProp = Property;
    }).then(() => {
      playlistModel.findOne({type: "moodBased", genre: moodProp.name}).then((Playlist) => {
        moodPlaylist = Playlist;
      }).then(() => {
        songModel.aggregate(
          [
            {$match: {mood: moodProp.name}},
            {$sample: {size: 20}}
          ]
        ).then((Song) => {
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: moodPlaylist._id}, {$pop: {songs: 1}}).then(() => {});
          }
          for (i = 0; i < Song.length; i++) {
            playlistModel.updateOne({_id: moodPlaylist._id}, {$push: {songs: Song[i].name}}).then(() => {});
          }
        }).then(() => {
          playlistModel.findOne({_id: moodPlaylist._id}).then((Playlist) => {
            res.json(Playlist);
          });
        });
      });
    });
  });
}
module.exports = playlistRoutes;

