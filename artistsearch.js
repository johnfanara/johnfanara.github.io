var spotifyAuth = require('./spotify-auth');
let artist = document.getElementById("artist-input").value;
let apiUrl = `https://api.spotify.com/v1/search?q=${artist}&type=location`;
    let accessToken = "your_access_token";