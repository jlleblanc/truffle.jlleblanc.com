export default function (truffle) {
  var fields = []

  for(var key in truffle) {
    if(key != 'id' && key != 'hostId' && key != 'timestamp') {
      fields.push( { type: key, value: truffle[key] } )
    }
  }

  return fields
}
