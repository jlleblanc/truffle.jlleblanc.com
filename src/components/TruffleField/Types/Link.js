import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  padding: .5em 0em .5em 0em;
`
export default ({ value }) => {
  return (
    <Link href={value}>{value}</Link>
  )
}
