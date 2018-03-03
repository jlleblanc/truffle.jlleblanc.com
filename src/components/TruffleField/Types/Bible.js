import React from 'react'
import styled from 'styled-components'

const Bible = styled.a`
  display: block;
  padding: .5em 0em .5em 0em;
`

export default ({ value }) => {
  let passageUrl = 'https://www.biblegateway.com/passage/?version=NRSV&search=' + value
  return (
    <Bible href={passageUrl}>{value}</Bible>
  )
}
