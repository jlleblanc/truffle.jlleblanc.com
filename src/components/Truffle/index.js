import React from 'react'
import TruffleFields from '../TruffleFields'

const Truffle = ({ id, timestamp, hostId, fields }) => (
  <div>
    {id} {timestamp} {hostId}
    <TruffleFields fields={fields} />
  </div>
)

export default Truffle
