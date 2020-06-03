const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

const mongoosePort = require('../env_variables/env_vars.json').mongoosePort
mongoose.connect(mongoosePort);

const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middlewares/token_auth');

/**
 * addSongsToAlbum request
 * @module addSongsToAlbumRoutes 
 */
const addSongsToAlbumRoutes = (app, fs) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    /**
     * This function would request info of the user ID and requirs that he is an artist. it will also request the song name and the album ID.
     * It searches the collection of users and finds the particular artist that wants to add the song. 
     * Then it finds the particualr album that the artist want to add the song inside it.
     * It would add this song to the specified album and update the info of the artist.
     * @name put/addSongsToAlbum
     * @function
     * @memberof module:addSongsToAlbumRoutes
     * @param {*} req requesting the needed info from postman as the following:
     * @param {*} _id the user's id generated by the mongoBD as requested from the postman
     * @param {string} songName is the name of the song as requested from the postman
     * @param {*} _id the album's id generated by the mongoDB as requested from the postman
     * @param {string} res it tells the artist either the song was added successfully or an error occured
     */
    app.put('/addSongsToAlbum', auth, (req, res, next) => {
            mongoose.connection.db.collection('albums',function(err, collection2){
                if (err){
                    throw err;
                }
                collection2.find({_id:new ObjectId (req.body.albumId)}).toArray(function(err,docs){
                    collection2.updateOne(
                        {_id: new ObjectId(req.body.albumId)},
                        {$push:{ songs :req.body.songName}}
                    );

                });
            });
        res.send("song added to album");
      });

};

module.exports = addSongsToAlbumRoutes;