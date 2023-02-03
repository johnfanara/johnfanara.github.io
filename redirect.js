var client_id = 'c74d3237fbdb4ca48c50b51b8a62e709';
var redirect_uri = 'https://johnfanara.github.io/';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

module.exports = app;