import React from 'react'
import Truffle from '../Truffle'
import extractFields from '../../lib/extract-truffle-fields'

const TruffleFeed = ({ truffleRepo }) => (
  <div>
    {truffleRepo.hostIdList.map(id => {
        var truffle = truffleRepo.masterList.get(id)
        return <Truffle
                key={truffle.id}
                id={truffle.id}
                hostId={truffle.hostId}
                timestamp={truffle.timestamp}
                fields={extractFields(truffle)}
                guests={truffleRepo.getGuests(truffle)}
               />
      })
    }
  </div>
)

export default TruffleFeed
