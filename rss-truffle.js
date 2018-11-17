// Was getting tired of trying to figure out how to write a Gatsby plugin, so here goes nothing
const jsonfile = require('jsonfile')
const RSS = require('rss')
const fs = require('fs')

var feed = jsonfile.readFileSync('static/feed.json')
var rss = new RSS({
  title: "Joe's Truffles",
  description: "An RSS representation of Joe's Truffle feed"
})

feed = feed.slice(0, 20)

feed.forEach(function(truffle) {
  id = truffle.id
  timestamp = truffle.timestamp
  delete truffle.id
  delete truffle.timestamp

  var date = Date.parse(timestamp)

  var content = ''

  for (var field in truffle) {
    content += '<p><strong>' + field + ':</strong> '
    if(Array.isArray(truffle[field])) {
      content += '<ul>'
      truffle[field].forEach(function(arrayItem) {
        content += '<li>' + arrayItem + '</li>'
      })
      content += '</ul>'
    } else {
      content += truffle[field]
    }

    content += '</p>'
  }

  rss.item({
    url: 'https://truffle.jlleblanc.com/reader/#/' + id,
    title: '~~~~~',
    date: timestamp,
    description: content,
    guid: id
  })
})

var xml = rss.xml();

fs.writeFileSync('static/feed.xml', xml);

console.log(xml);

