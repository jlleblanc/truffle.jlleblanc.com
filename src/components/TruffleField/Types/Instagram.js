import React from 'react'
import Instagram from 'react-instagram-embed'

export default ({ value }) => (
  <Instagram
    url={value}
    maxWidth={320}
    hideCaption={false}
    containerTagName='div'
    protocol=''
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
)
