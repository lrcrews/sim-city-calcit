//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sim-city-calcit'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Redirect direct URLs back to index so Angular may then route them properly
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
