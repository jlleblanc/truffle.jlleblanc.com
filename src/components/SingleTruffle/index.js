import React from 'react'
import Truffle from '../Truffle'
import Guests from '../Guests'
import TruffleRepository from '../../lib/TruffleRepository'
import extractFields from '../../lib/extract-truffle-fields'
import Link from "gatsby-link"

class SingleTruffle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      truffleRepo: null,
      match: props.match
    }
  }

  componentDidMount() {
    fetch("/feed.json")
      .then(res => res.json())
      .then(rawFeed => {
        var repo = new TruffleRepository()
        repo.parse(rawFeed)
        return repo
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            truffleRepo: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, truffleRepo, match } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var truffle = truffleRepo.masterList.get(match.params.id)
      var guests = truffleRepo.getGuests(truffle)
      return (
        <div>
          <Truffle
            key={truffle.id}
            id={truffle.id}
            hostId={truffle.hostId}
            timestamp={truffle.timestamp}
            fields={extractFields(truffle)}
            guests={[]}
           />
           <Guests guests={guests} />
           <Link to="/">🔙 return to list</Link>
        </div>
      )
    }

  }
}

export default SingleTruffle
