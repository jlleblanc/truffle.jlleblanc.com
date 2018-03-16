import React from 'react'
import TruffleFeed from '../components/TruffleFeed'
import TruffleRepository from '../lib/TruffleRepository'


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
      .then(rawFeed => {
        var repo = new TruffleRepository()
        repo.parse(rawFeed)
        return repo
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            truffleRepo: result
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
    const { error, isLoaded, truffleRepo } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <TruffleFeed truffleRepo={truffleRepo} />
      )
    }

  }
}

export default Reader
