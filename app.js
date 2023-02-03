// Listen for the click event on the search button
document.getElementById("search-button").addEventListener("click", function() {
    // Retrieve the values of the location and artist input fields
    let location = document.getElementById("location-input").value;
    let artist = document.getElementById("artist-input").value;
  
    // Use the values to construct the Spotify Web API search request
    let apiUrl = `https://api.spotify.com/v1/search?q=${location}+${artist}&type=artist`;
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
        
        // Extract the relevant information about the artists
        let results = artists.map(artist => {
          return `<li>${artist.name} - ${artist.location}</li>`;
        });
        
        // Display the results in the HTML
        document.getElementById("results-list").innerHTML = results.join("");
      })
      .catch(error => {
        console.error(error);
      });
  });
  