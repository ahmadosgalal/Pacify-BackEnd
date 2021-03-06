var Song = require ('../models/song');
var mongoose = require ('mongoose');

var url = require('../../env_variables/env_vars.json').mongoosePort;
mongoose.connect(url);

var songs = [
    new Song({
        name: "Termtany",
        year: 2020,
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        genre: "HipHop",
        mood: "Inspirational",
        artist: "Abdobeatz",
        featured: ["Editingmaster"]
    }),
    new Song({
        name: "pythondisstrack",
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        year: 2020,
        genre: "HipHop",
        mood: "Inspirational",
        artist: "Abdobeatz",
        featured: ["Editingmaster"]
    }),
    new Song({
        name: "stand_by_me",
        url : "https://www.mboxdrive.com/stand_by_me.mp3",
        year: 2020,
        genre: "Electronic",
        mood: "Calm",
        artist: "Editingmaster",
    }),
    new Song({
        name: "dancin_editingmaster_remix",
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        year: 2020,
        genre: "Ads",
        mood: null,
        artist: "Editingmaster",
        featured: ["Shaloos"]
    }),
    new Song({
        name: "yer_a_pirate",
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        year: 2020,
        genre: "Ads",
        mood: null,
        artist: "Editingmaster",
        featured: ["Shaloos"]
    }),
    new Song({
        name: "deee7k",
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        year: 2020,
        genre: "Ads",
        mood: null,
        artist: "Editingmaster",
        featured: ["Shaloos"]
    }),
    new Song({
        name: "Summer - Bensound Royalty Free Music - No Copyright Music",
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        year: 2020,
        genre: "Electronic",
        mood: "Calm",
        artist: "Bensound",
    }),
    new Song({
        name: "1200 AM - Ramzoid Royalty Free Music - No Copyright Music",
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        year: 2020,
        genre: "Electronic",
        mood: "Dramatic",
        artist: "Ramzoid",
    }),
    new Song({
        name: "Milky Way - Ramzoid Royalty Free Music - No Copyright Music",
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        year: 2020,
        genre: "Electronic",
        mood: "Dramatic",
        artist: "Ramzoid",
    }),
    new Song({
        name: "Wonton - Ramzoid Royalty Free Music - No Copyright Music",
        url : "https://www.mboxdrive.com/dancin_editingmaster_remix.mp3",
        year: 2020,
        genre: "Electronic",
        mood: "Inspirational",
        artist: "Ramzoid",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "CIRCLES - tubebackr Royalty Free Music Instrumental Inspirational Background Music For Videos",
        year: 2020,
        genre: "Electronic",
        mood: "Inspirational",
        artist: "tubebackr",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Sky Level - CheesecakeDude Non Copyrighted Music For Background Of Video Free Download Music C",
        year: 2020,
        genre: "Electronic",
        mood: "Inspirational",
        artist: "CheesecakeDude",
    }),
    new Song({
        url : "https://www.mboxdrive.com/stand_by_me.mp3",
        name: "The Happy Choice - CheeseCakeDude Background Music For Videos No Copyright Instrumental Music",
        year: 2020,
        genre: "Electronic",
        mood: "Inspirational",
        artist: "CheesecakeDude",
    }),
    new Song({
        url : "https://www.mboxdrive.com/stand_by_me.mp3",
        name: "Green Forest - Riot Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Country",
        mood: "Calm",
        artist: "Riot",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Safety Net - Riot Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Country",
        mood: "Happy",
        artist: "Riot",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Strolling Through - Silent Partner Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Country",
        mood: "Inspirational",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Dark_Souls_III_Soundtrack_OST_-_Epilogue_Ending_Credits_The_Ringed_City",
        year: 2020,
        genre: "Gaming",
        mood: "Dark",
        artist: "FromSoftware-Darksouls3",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Dark_Souls_III_Soundtrack_OST_-_Slave_Knight_Gael_The_Ringed_City",
        year: 2020,
        genre: "Gaming",
        mood: "Dark",
        artist: "FromSoftware-Darksouls3",
    }),
    new Song({
        url : "https://www.mboxdrive.com/stand_by_me.mp3",
        name: "Dark_Souls_III_Soundtrack_OST_-_Soul_of_Cinder",
        year: 2020,
        genre: "Gaming",
        mood: "Dark",
        artist: "FromSoftware-Darksouls3",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "A To The O - Diamond Ortiz Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "HipHop",
        mood: "Funky",
        artist: "DiamondOrtiz",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Not For Nothing - Otis McDonald Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "HipHop",
        mood: "Funky",
        artist: "OtisMcDonald",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Top Down - Jingle Punks Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "HipHop",
        mood: "Dark",
        artist: "JinglePunks",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "SpongeBob theme songEarrape",
        year: 2020,
        genre: "Kids",
        mood: "Bright",
        artist: "Editingmasters",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Don't Hate Me - Jingle Punks Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Pop",
        mood: "Funky",
        artist: "JinglePunks",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Eyes On You - Network 415 Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Pop",
        mood: "Happy",
        artist: "Network415",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "I Love You - Vibe Tracks Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Pop",
        mood: "Inspirational",
        artist: "VibeTracks",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Lonely Nights - Silent Partner Royalty Free Fusic - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Pop",
        mood: "Dramatic",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Starry Eyed Romance - Biz Baz Studio Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "Pop",
        mood: "Romantic",
        artist: "BizBaz",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "After Thought - Density & Time Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "Punk",
        mood: "Sad",
        artist: "Density&Time",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Hang For Days - Silent Partner Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "Punk",
        mood: "Funky",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Nothin' Yet - Spazz Cardigan Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "Punk",
        mood: "Angry",
        artist: "SpazzCardigan",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Outlet - Silent Partner Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Punk",
        mood: "Angry",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Parasail - Silent Partner Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Rock",
        mood: "Bright",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "The Coldest Shoulder - The 126ers Royalty Free Music - No Copyright Music",
        year: 2020,
        genre: "Rock",
        mood: "Dark",
        artist: "The126ers",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Walk With Me - Silent Partner Royalty Free Music - No Copyright Music YouTube Music",
        year: 2020,
        genre: "Rock",
        mood: "Happy",
        artist: "SilentPartner",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Allem Alby",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Haytham Shaker",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Ana Ayesh",
        year: 20219,
        genre: "Rock",
        mood: "Happy",
        artist: "Haytham Shaker",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Roh",
        year: 2020,
        genre: "Rock",
        mood: "Happy",
        artist: "Amr Diab",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Sahran",
        year: 2020,
        genre: "Rock",
        mood: "Happy",
        artist: "Amr Diab",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Gamda",
        year: 2020,
        genre: "Rock",
        mood: "Happy",
        artist: "Amr Diab",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Helwa El bedayat",
        year: 2020,
        genre: "Rock",
        mood: "Happy",
        artist: "Amr Diab",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Kol Makan",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Ramy Sabry",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Habayebna",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Angham",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Mesh Mohem Ana",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Haytham Shaker",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Matghebosh",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Haytham Shaker",
    }),
    new Song({
        url : "https://www.mboxdrive.com/Bye%20Bye%20(Instrumental).mp3",
        name: "Habiby Ya Omry",
        year: 2019,
        genre: "Rock",
        mood: "Happy",
        artist: "Haytham Shaker",
    })
];

var counter = 0;
for (var i = 0; i < songs.length; i++) {
    songs[i].save(function(err, result) {
        counter++;
        if (counter === songs.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}