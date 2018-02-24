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

  // TODO: this is where we're going to have to determine the type, then
  // conditionally load a field render for each

  render () {
    const { type, value } = this.state

    let Renderer = Types.find(type, value)

    return (
      <Renderer type={type} value={value} />
    )

    // if (type == 'Comment') {
    //   return (
    //     <div>
    //       <h4>{type}</h4>
    //       <p>{value}</p>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <h4>{type}</h4>
    //       <p>{value}</p>
    //     </div>
    //   )
    // }

  }
}

export default TruffleField
