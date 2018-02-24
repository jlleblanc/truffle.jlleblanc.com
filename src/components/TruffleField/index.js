import React from 'react'
import Types from './Types'

class TruffleField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      value: props.value
    }
  }

  render () {
    const { type, value } = this.state

    let Renderer = Types.find(type, value)

    return (
      <Renderer type={type} value={value} />
    )
  }
}

export default TruffleField
