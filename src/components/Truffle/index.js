import React from 'react'
import TruffleFields from '../TruffleFields'
import formatTimestamp from '../../lib/format-timestamp'

const Truffle = ({ id, timestamp, hostId, fields }) => (
  <article>
    {formatTimestamp(timestamp)}
    <TruffleFields fields={fields} />
  </article>
)

export default Truffle
