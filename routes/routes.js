const likedAlbumsRoutes = require('./likedAlbums');
const likedArtistsRoutes = require('./likedArtists');
const likedSongsRoutes = require('./likedSongs');
const rateSongsRoutes = require('./rateSongs');
const userRoutes = require('./users');
const createSongRoutes = require('./createSong');
const createAlbumRoutes= require('./createAlbum');
const getSongUploadsRoutes = require ('./getSongUploads');
const getAlnumUploadsRoutes = require ('./getAlbumUploads');
const addSongsToAlbumRoutes = require ('./addSongsToAlbum')
const getAlbumSongsRoutes = require ('./getAlbumSongs');
const getSongRoutes = require ('./getSong')
const getAlbumRoutes = require ('./getAlbum');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });


    likedAlbumsRoutes(app, fs);
    likedArtistsRoutes(app, fs);
    likedSongsRoutes(app, fs);
    rateSongsRoutes(app, fs);
    createSongRoutes(app, fs);
    createAlbumRoutes(app, fs);
    getSongUploadsRoutes(app,fs);
    getAlnumUploadsRoutes(app,fs);
    addSongsToAlbumRoutes (app, fs);
    getAlbumSongsRoutes(app,fs);
    getSongRoutes(app, fs);
    getAlbumRoutes(app, fs);
    userRoutes(app, fs);
};

module.exports = appRouter;