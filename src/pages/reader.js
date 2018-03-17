import React from 'react'
import TruffleFeed from '../components/TruffleFeed'
import SingleTruffle from '../components/SingleTruffle'
import TruffleRepository from '../lib/TruffleRepository'
import { BrowserRouter as Router, Route } from "react-router-dom";


const Reader = () => (
  <Router>
    <div>
      <Route path="/reader" exact={true} component={TruffleFeed} />
      <Route path="/reader/:id" exact={true} component={SingleTruffle} />
    </div>
  </Router>
)

export default Reader
