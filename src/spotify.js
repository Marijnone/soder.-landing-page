//redirect and acces token set

// const button = document.querySelector("button");

//https://lfcuc.codesandbox.io/
//this tool is great: https://kigiri.github.io/fetch/

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token
let _token = hash.access_token;

const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "b84e6446cbaf45d589a609197cf78978";
const redirectUri = "https://lfcuc.codesandbox.io/";
const scopes = [""];

// If there is no token, redirect to Spotify authorization
// if (!_token) {
// alert("si")
// }

const button = document.querySelector("button");

button.addEventListener("click", event => {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
});

try {
  fetch("https://api.spotify.com/v1/artists/2N2hOy7cgLlfage0jrE1Kb/albums", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + _token
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const albums = data.items.map(item => {
        return item.images[0].url;
      });
      // console.log(albums);
    })
    .then(albums => {
      console.log(albums);

      albums.forEach(albums => {
        const myImage = new Image(100, 200);
        myImage.src = albums;
        document.body.appendChild(myImage);
      });
    });
} catch (error) {
  console.log(error);
}
