// TODO: use this for linking to individual truffles
// import Link from 'gatsby-link'
import React from 'react'
import Truffle from '../Truffle'
import extractFields from '../../lib/extract-truffle-fields'

class TruffleFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      truffles: props.truffles
    }
  }

  render() {
    const { truffles } = this.state
    return (
      <div>
        {truffles.map(truffle => (
          <Truffle
            key={truffle.id}
            id={truffle.id}
            hostId={truffle.hostId}
            timestamp={truffle.timestamp}
            fields={extractFields(truffle)}
          />
        ))}
      </div>
    )
  }
}

export default TruffleFeed
