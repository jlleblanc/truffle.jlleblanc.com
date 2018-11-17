// Was getting tired of trying to figure out how to write a Gatsby plugin, so here goes nothing
const jsonfile = require('jsonfile')
const RSS = require('rss')
const fs = require('fs')

var feed = jsonfile.readFileSync('static/feed.json')
var rss = new RSS({
  title: "Joe's Truffles",
  description: "An RSS representation of Truffle data"
})



//rss.item({
//  
//})

var xml = rss.xml();

fs.writeFileSync('static/feed.xml', xml);

console.log(xml);

//jsonfile.writeFileSync('static/feed.xml', feed, {spaces: 2});
