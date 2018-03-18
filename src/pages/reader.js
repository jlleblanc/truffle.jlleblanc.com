import React from 'react'
import TruffleFeed from '../components/TruffleFeed'
import SingleTruffle from '../components/SingleTruffle'
import TruffleRepository from '../lib/TruffleRepository'
import { Route } from "react-router-dom";


const Reader = (props) => {
  let hash = props.location.hash

  if (hash === '' || hash === '#/') {
    return <TruffleFeed />
  }

  return <SingleTruffle id={hash.replace(/#\//, '')} />
}

export default Reader
