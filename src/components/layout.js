import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './layout.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Truffle"
      meta={[
        { name: 'description', content: 'hosted conversations open to interpretation' },
        { name: 'keywords', content: 'publishing, JSON, social networking' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)


export default TemplateWrapper
