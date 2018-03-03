export default function (truffle) {
  var fields = []
  var tags = []

  for (var key in truffle) {
    if (key != 'id' && key != 'hostId' && key != 'timestamp') {
      if (typeof(truffle[key]) === 'boolean') {
        tags.push( { type: key, value: truffle[key] } )
      } else {
        fields.push( { type: key, value: truffle[key] } )
      }
    }
  }

  return fields.concat(tags)
}
