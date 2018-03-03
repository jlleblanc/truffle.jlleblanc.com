import React from 'react'

export default ({ value }) => (
  <audio controls="controls" preload="none">
    <source src={value}></source>
  </audio>
)
