import React from 'react'
import Instagram from './Instagram'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  padding: .5em 0em .5em 0em;
`
export default ({ value }) => {

  // Historically, I've posted instagrams as "Link" types. Unfortunately, this
  // brings up the issue that I should probably have better link handling in
  // this reader in general. For now though, I want to display what I have in
  // the most expedient way possible.
  if (value.indexOf('https://www.instagram.com') === 0 || value.indexOf('https://instagr.am') === 0) {
    return (
      <Instagram value={value} />
    )
  }

  return (
    <Link href={value}>{value}</Link>
  )
}
