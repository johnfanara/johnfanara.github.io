var spotifyAuth = require('./spotify-auth');
// Listen for the click event on the search button
document.getElementById("search-button").addEventListener("click", function() {
    // Retrieve the values of the location and artist input fields
    let location = document.getElementById("location-input").value;
  
    // Use the values to construct the Spotify Web API search request
    let apiUrl = `https://api.spotify.com/v1/search?q=${location}&type=artist`;
    let accessToken = "your_access_token";
    
    // Use the Fetch API to make a GET request to the Spotify Web API
    fetch(apiUrl, {headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        let artists = data.artists.items;
        
        let artistArray = [];
        
        for (let i = 0; i < 10; i++) {
          artistArray.push(artist[i].name);
        }

        let artistList = "";
        for (let artist of artistArray){
          artistList += '<li>${artist}</li>';
        }

        // Extract the relevant information about the artists
        //let results = artists.map(artist => {
        //  return `<li>${artist.name} - ${artist.location}</li>`;
        //});
        
        // Display the results in the HTML
        //document.getElementById("results-list").innerHTML = results.join("");
        //})
        
        document.getElementById("results-list").innerHTML = artistList;
      })
      .catch(error => {
        console.error(error);
      });
  });
  