import React from 'react'
import TruffleFeed from '../components/TruffleFeed'

class Reader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      truffles: []
    }
  }

  componentDidMount() {
    fetch("/feed.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            truffles: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, truffles } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <TruffleFeed truffles={truffles} />
      )
    }

  }
}

export default Reader
