import React from 'react'
import TruffleFeed from '../components/TruffleFeed'
import SingleTruffle from '../components/SingleTruffle'
import Layout from "../components/layout"


const Reader = (props) => {
  let hash = props.location.hash

  if (hash === '' || hash === '#/') {
    return (
      <Layout>
        <TruffleFeed />
      </Layout>
    )
  }

  return (
    <Layout>
      <SingleTruffle id={hash.replace(/#\//, '')} />
    </Layout>
  )
}

export default Reader
