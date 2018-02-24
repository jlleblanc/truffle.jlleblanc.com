import React from 'react'
import TruffleField from '../TruffleField'

class TruffleFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: props.fields
    }
  }

  render() {
    const { fields } = this.state

    return (
      <div>
        {fields.map(field => (
          <TruffleField key={field.type} type={field.type} value={field.value} />
        ))}
      </div>
    )
  }
}

export default TruffleFields
