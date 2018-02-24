import React from 'react'

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      value: props.value
    }
  }

  render() {
    const { type, value } = this.props

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
}

export default Tag
