import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render() {
    const { value } = this.props

    return (
      <div>
        <h4>Comment</h4>
        <blockquote>{value}</blockquote>
      </div>  
    )
  }
}

export default Comment
