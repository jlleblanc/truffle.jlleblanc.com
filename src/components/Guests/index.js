import React from 'react'
import Truffle from '../Truffle'
import extractFields from '../../lib/extract-truffle-fields'

const Guests = ({ guests }) => {

  if (guests.length > 0) {
    return (
      <div>
        <h2>Guests</h2>
        {guests.map(truffle => {
            return <Truffle
                    key={truffle.id}
                    id={truffle.id}
                    hostId={truffle.hostId}
                    timestamp={truffle.timestamp}
                    fields={extractFields(truffle)}
                    guests={[]}
                   />
          })
        }
      </div>
    )
  }

  return <div />
}

export default Guests
