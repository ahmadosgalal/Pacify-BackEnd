define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\WIN 10\\Documents\\Software Project\\Pacify-BackEnd-Doaa\\Pacify-BackEnd-Doaa\\APIDoc_v0.1.0\\docs\\main.js",
    "groupTitle": "C:\\Users\\WIN 10\\Documents\\Software Project\\Pacify-BackEnd-Doaa\\Pacify-BackEnd-Doaa\\APIDoc_v0.1.0\\docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/download",
    "title": "APK Download Request",
    "version": "0.1.0",
    "name": "APK_Download",
    "group": "Download",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "successful",
            "description": "<p>Pacify is downloaded</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotDownloaded",
            "description": "<p>Pacify can't be downloaded</p>"
          }
        ]
      }
    },
    "filename": "./download.js",
    "groupTitle": "Download"
  },
  {
    "type": "get",
    "url": "/confirmregisteration/:id",
    "title": "Confirm the entered data",
    "version": "0.1.0",
    "name": "Data_Confirmation",
    "group": "Email_Registeration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the user</p>"
          }
        ]
      }
    },
    "filename": "./confirmSignUp.js",
    "groupTitle": "Email_Registeration"
  },
  {
    "type": "post",
    "url": "/confirm",
    "title": "Confirm the email",
    "version": "0.1.0",
    "name": "email_Confirmation",
    "group": "Email_Registeration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The ID of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Code",
            "description": "<p>Confirmation code sent to the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>ID for the user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "string",
            "optional": false,
            "field": "wrongCode",
            "description": "<p>Different code from the sent to the email</p>"
          }
        ]
      }
    },
    "filename": "./confirmSignUp.js",
    "groupTitle": "Email_Registeration"
  },
  {
    "type": "get",
    "url": "/selectgenresandartists/",
    "title": "Get the user all preferences",
    "version": "0.1.0",
    "name": "Get_Choosing_preferences",
    "group": "First_login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "artist",
            "description": "<p>The artists info(ID-Name-Photo)</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "library",
            "description": "<p>The libararies info(ID-Name-Photo)</p>"
          }
        ]
      }
    },
    "filename": "./First_login.js",
    "groupTitle": "First_login"
  },
  {
    "type": "post",
    "url": "/select/",
    "title": "Save the choosen preferences",
    "version": "0.1.0",
    "name": "Save_Choosing_preferences",
    "group": "First_login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number[]",
            "optional": false,
            "field": "artists",
            "description": "<p>The info about selected artists(ID)</p>"
          },
          {
            "group": "Parameter",
            "type": "number[]",
            "optional": false,
            "field": "library",
            "description": "<p>The info about selected libraries(ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "libraries",
            "description": "<p>The generated libraries based on user's taste</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "string",
            "optional": false,
            "field": "badgetway",
            "description": "<p>Playlists are not generated</p>"
          }
        ]
      }
    },
    "filename": "./First_login.js",
    "groupTitle": "First_login"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Request Login",
    "name": "Login",
    "group": "Login_Validation",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>The user's Email (username).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>The user's Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Token",
            "optional": false,
            "field": "Token",
            "description": "<p>Generates The user's Token based on the credintials</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FailedLogin",
            "description": "<p>Wrong Username or Password</p>"
          }
        ]
      }
    },
    "filename": "./Login.js",
    "groupTitle": "Login_Validation"
  },
  {
    "type": "post",
    "url": "/createPlaylist",
    "title": "Create Playlist",
    "version": "0.1.0",
    "name": "CreatePlaylist",
    "group": "Playlists",
    "description": "<p>Create a playlist in database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has playlist name and token of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with created playlist</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "next",
            "description": "<p>If there is an error</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "playlist",
            "description": "<p>Created playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "delete",
    "url": "/collection/playlist/:playlistId",
    "title": "Delete Playlist",
    "version": "0.1.0",
    "name": "DeletePlaylist",
    "group": "Playlists",
    "description": "<p>Deletes a playlist in database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has playlist id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with a message when deleted</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "next",
            "description": "<p>If there is an error</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/genre",
    "title": "Genre-Based Playlist",
    "version": "0.1.0",
    "name": "GetGenreBasedPlaylist",
    "group": "Playlists",
    "description": "<p>Each genre has a playlist for it created in database updated with songs having same genre</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has type of required playlist</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with required playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "genreBasedPlaylist",
            "description": "<p>Genre-based playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/highestRated",
    "title": "Highest-Rated Playlist",
    "version": "0.1.0",
    "name": "GetHighestRatedPlaylist",
    "group": "Playlists",
    "description": "<p>Retrieves highest-rated playlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>request body</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with highest-rated playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "highestRatedPlaylist",
            "description": "<p>Highest-rated playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/homePlaylists",
    "title": "Home Playlists",
    "version": "0.1.0",
    "name": "GetHomePlaylists",
    "group": "Playlists",
    "description": "<p>collects different types of playlists in one array</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>request body</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with all required playlists</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "next",
            "description": "<p>If there is an error</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "playlists",
            "description": "<p>Different types of playlists</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/mood",
    "title": "Mood-Based Playlist",
    "version": "0.1.0",
    "name": "GetMoodBasedPlaylist",
    "group": "Playlists",
    "description": "<p>Each mood has a playlist created for it in database updated with songs having same mood</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has type of required playlist</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with required playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "moodBasedPlaylist",
            "description": "<p>Mood-based playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/collection/playlist/:playlistId",
    "title": "Get Playlist",
    "version": "0.1.0",
    "name": "GetPlaylist",
    "group": "Playlists",
    "description": "<p>Retrieves playlist songs</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has playlist id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with songs of required playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "songs",
            "description": "<p>Playlist songs</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/random",
    "title": "Random Playlist",
    "version": "0.1.0",
    "name": "GetRandomPlaylist",
    "group": "Playlists",
    "description": "<p>Generate random playlists</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>request body</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with a random playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "randomPlaylist",
            "description": "<p>Random playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/region",
    "title": "Region-Based Playlist",
    "version": "0.1.0",
    "name": "GetRegionBasedPlaylist",
    "group": "Playlists",
    "description": "<p>Each region has a playlist created in database called &quot;Top in 'region'&quot; updated with region songs played the most</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has type of required playlist</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with required playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "regionBasedPlaylist",
            "description": "<p>Region-based playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "get",
    "url": "/playlist/trending",
    "title": "Trending Playlist",
    "version": "0.1.0",
    "name": "GetTrendingPlaylist",
    "group": "Playlists",
    "description": "<p>Retrieves playlist created in database updated with songs played the most</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>request body</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with trending playlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "trendingPlaylist",
            "description": "<p>Trending playlist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./PlaylistTypes.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "put",
    "url": "/playlist/:id",
    "title": "Like Playlist",
    "version": "0.1.0",
    "name": "LikePlaylist",
    "group": "Playlists",
    "description": "<p>Adds the id of an existing playlist to the liking user and the id of him/her to the liked playlist, in case playlist is liked, it ulikes it and vice versa</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has playlist id and token of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with a message when playlist is liked or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Liked</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "delete",
    "url": "/collection/playlist/:playlistId/song/:songId",
    "title": "Remove Song from Playlist",
    "version": "0.1.0",
    "name": "RemoveSongFromPlaylist",
    "group": "Playlists",
    "description": "<p>Remove song from playlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>It has playlist id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>It responds with a message when song is removed</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "next",
            "description": "<p>If there is an error</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "PlaylistNotFound",
            "description": "<p>Playlist is not found</p>"
          }
        ]
      }
    },
    "filename": "./Playlist.js",
    "groupTitle": "Playlists"
  },
  {
    "type": "post",
    "url": "/purchase/",
    "title": "Check the entered code",
    "version": "0.1.0",
    "name": "Check_code",
    "group": "Premium_subscribtion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The sent code to user's email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "premium",
            "description": "<p>Notifiying the user he is premium now</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "string",
            "optional": false,
            "field": "wrongcode",
            "description": "<p>User enters a wrong code</p>"
          }
        ]
      }
    },
    "filename": "./premium.js",
    "groupTitle": "Premium_subscribtion"
  },
  {
    "type": "get",
    "url": "/getpremium/",
    "title": "Get Premium ID",
    "version": "0.1.0",
    "name": "Get_code",
    "group": "Premium_subscribtion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Getting logged user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Retrieved user id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "string",
            "optional": false,
            "field": "forbidden",
            "description": "<p>For users not logged in</p>"
          }
        ]
      }
    },
    "filename": "./premium.js",
    "groupTitle": "Premium_subscribtion"
  },
  {
    "type": "post",
    "url": "/register/",
    "title": "Create new Account",
    "version": "0.1.0",
    "name": "Create_Account",
    "group": "Registeration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "day",
            "description": "<p>day of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "month",
            "description": "<p>month of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "year",
            "description": "<p>year of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "shareData",
            "description": "<p>Share data with spotify or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID for the user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "emailAlreadytaken",
            "description": "<p>A user registered with same email</p>"
          }
        ]
      }
    },
    "filename": "./signUp.js",
    "groupTitle": "Registeration"
  },
  {
    "type": "get",
    "url": "/signup/",
    "title": "Get Signup Page",
    "version": "0.1.0",
    "name": "Get",
    "group": "Registeration",
    "filename": "./signUp.js",
    "groupTitle": "Registeration"
  },
  {
    "type": "get",
    "url": "/accountsettings",
    "title": "retrieve account settings",
    "version": "0.1.0",
    "name": "Retrieve",
    "group": "User_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Retrieves the user info including ID,email,username, birhtdate, country and subscribtion type</p>"
          }
        ]
      }
    },
    "filename": "./changeSettings.js",
    "groupTitle": "User_Settings"
  },
  {
    "type": "post",
    "url": "/saveprofile",
    "title": "save account changes",
    "version": "0.1.0",
    "name": "Save",
    "group": "User_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Sends a modified copy of user settings including new email, password, mobile no., birthdate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "successful",
            "description": "<p>Tell the user that new settings are applied</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "string",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Worng password</p>"
          }
        ]
      }
    },
    "filename": "./changeSettings.js",
    "groupTitle": "User_Settings"
  },
  {
    "type": "get",
    "url": "/browse",
    "title": "Start a Search",
    "name": "browse",
    "group": "WebPLayer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Features",
            "description": "<p>All the features choosen</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Results",
            "description": "<p>Returns Playlists/albums/songs Meeting the feautures</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Nothing Found</p>"
          }
        ]
      }
    },
    "filename": "./Browse.js",
    "groupTitle": "WebPLayer"
  }
] });
