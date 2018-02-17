import React from 'react'
import Link from 'gatsby-link'

export const query = graphql`
  query AllTruffles {
    allFeedJson {
      edges {
        node {
          id
          hostId
          timestamp
          Comment
          Bible_passage
        }
      }
    }
  }
`

const Reader = ({ data }) => (
  <div>
    <h1>
    I'm joe {data.allFeedJson.edges[0].node.id}
    </h1>
  </div>
)

export default Reader
