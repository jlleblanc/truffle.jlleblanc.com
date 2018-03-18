const uuidv4 = require('uuid/v4');
const jsonfile = require('jsonfile');

var feed = jsonfile.readFileSync('static/feed.json');

var truffle = {
  id: uuidv4(),
  timestamp: new Date
};

feed.unshift(truffle);

jsonfile.writeFileSync('static/feed.json', feed, {spaces: 2});
