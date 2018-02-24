import React from 'react'

class Plain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      value: props.value
    }
  }

  render() {
    const { type, value } = this.props

    return (
      <div>
        <h4>{type}</h4>
        <div>{value}</div>
      </div>
    )
  }
}

export default Plain
