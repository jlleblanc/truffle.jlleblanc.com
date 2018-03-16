import React from 'react'
import styled from "styled-components"

const GuestSummary = styled.div`
  display: inline-block;
  padding-right: .6em;
  padding-left: .6em;
  margin-right: .25rem;
  font-family: sans-serif;
  font-size: 75%;
  color: #4caa8a;
`

export default ({ guestCount }) => {
  if (guestCount === 1) {
    return <GuestSummary>One guest</GuestSummary>
  } else if (guestCount > 1) {
    return <GuestSummary>{guestCount} guests</GuestSummary>
  } else {
    return <div />
  }
}
