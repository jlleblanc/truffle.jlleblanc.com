import React from 'react'

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
      <dl>
        {fields.map(field => (
          <span key={field.type}>
            <dt>{field.type}</dt>
            <dd>{field.value}</dd>
          </span>
        ))}
      </dl>
    )
  }
}

export default TruffleFields
