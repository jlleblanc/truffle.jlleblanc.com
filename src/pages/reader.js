import React from 'react'
import TruffleFeed from '../components/TruffleFeed'
import SingleTruffle from '../components/SingleTruffle'
import TruffleRepository from '../lib/TruffleRepository'
import { HashRouter as Router, Route } from "react-router-dom";


const Reader = () => (
  <Router>
    <div>
      <Route path="/" exact={true} component={TruffleFeed} />
      <Route path="/:id" exact={true} component={SingleTruffle} />
    </div>
  </Router>
)

export default Reader
