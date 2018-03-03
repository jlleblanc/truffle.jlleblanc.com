import React from 'react'
import Truffle from '../Truffle'
import extractFields from '../../lib/extract-truffle-fields'

const TruffleFeed = ({ truffles }) => (
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

export default TruffleFeed
