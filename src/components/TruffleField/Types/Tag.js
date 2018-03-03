import React from 'react'

const Tag = ({ type, value }) => {
  if (value === true) {
    return (
      <span>Tagged: {type}</span>
    )
  } else {
    return (
      <span>Untagged: {type}</span>
    )
  }
}

export default Tag
