// TODO: use this for linking to individual truffles
// import Link from 'gatsby-link'
import React from 'react'
import TruffleFields from '../TruffleFields'

class Truffle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      timestamp: props.timestamp,
      hostId: props.hostId,
      fields: props.fields
    }
  }

  render() {
    const { id, timestamp, hostId, fields} = this.state
    return (
      <div>
        {id} {timestamp} {hostId}
        <TruffleFields fields={fields} />
      </div>
    )
  }
}

export default Truffle
