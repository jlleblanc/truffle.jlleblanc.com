import React from 'react'
import Types from './Types'

const TruffleField = ({ type, value }) => {
  let Renderer = Types.find(type, value)

  return (
    <Renderer type={type} value={value} />
  )
}

export default TruffleField
