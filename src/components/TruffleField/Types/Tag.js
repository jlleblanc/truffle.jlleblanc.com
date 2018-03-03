import React from 'react'
import styled from "styled-components"

const Tag = styled.span`
  display: inline-block;
  padding-right: .6em;
  padding-left: .6em;
  margin-right: .25rem;
  font-family: sans-serif;
  font-size: 75%;
  color: #4caa8a;
`

// TODO: determine what to do when the value is false. Strikethrough?
export default ({ type, value }) => (
  <Tag>#{type}</Tag>
)
