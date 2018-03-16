class TruffleRepository {

  constructor() {
    this.masterList = new Map()
    this.hostIdList = []
    this.guestList = new Map()
  }

  parse(jsonFeed) {
    jsonFeed.map( truffle => this.processTruffle(truffle) )
  }

  processTruffle(truffle) {
    this.masterList.set(truffle.id, truffle)

    if (this.isGuest(truffle)) {
      this.addToGuestList(truffle)
    } else {
      this.hostIdList.push(truffle.id)
    }
  }

  isGuest(truffle) {
    return truffle.hasOwnProperty('hostId')
  }

  addToGuestList(truffle) {
    var hostGuests = this.guestList.get(truffle.hostId) || []
    hostGuests.push(truffle.id)
    this.guestList.set(truffle.hostId, hostGuests)
  }

  getGuests(truffle) {
    var guestIds = this.guestList.get(truffle.id) || []

    return guestIds.map( gId => this.masterList.get(gId) )
  }
}

export default TruffleRepository
