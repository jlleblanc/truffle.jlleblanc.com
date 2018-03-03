import React from 'react'
import TruffleFields from '../TruffleFields'
import formatTimestamp from '../../lib/format-timestamp'
import styled from "styled-components"

const Truffle = styled.div`
  border-radius: .25rem;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #e9ecef;
`

export default ({ id, timestamp, hostId, fields }) => (
  <Truffle>
    {formatTimestamp(timestamp)}
    <TruffleFields fields={fields} />
  </Truffle>
)
