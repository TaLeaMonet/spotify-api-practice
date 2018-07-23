const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/profile'
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID


let redirect_uri = process.env.REDIRECT_URI


app.get('/login', function(req, res) {
  console.log(SPOTIFY_CLIENT_ID, REDIRECT_URI)
;  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + SPOTIFY_CLIENT_ID +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI));
});

app.get('/profile', (req, res) => {
res.send('<center><h1>It worked!</h1></center>')
})

app.get('/', (req, res) => {
  res.send('<center><h1>Welcome To Frisco Rap Scene</h1></center>')
})

app.listen(PORT, () => console.log(`LIVE on localhost:${PORT}`))
