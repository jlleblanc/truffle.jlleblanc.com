import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>hosted conversations open to interpretation</h1>
    <h2>What is a truffle?</h2>
    <p>
    Truffles are decentralized messages for hosting conversations. They are open-source, user-definable, and can be transported independent of any specific social network. Because they are open-source, they can be filtered, sorted, and displayed in any method desired by end-users.
    </p>
    <h2>Why truffles?</h2>
    <p>
    Centralized social networks (e.g., Facebook, Twitter, etc...) are great at helping you stay in touch with people around the world. However, they're generally noisy and distracting. This is because most social networks monetize user activity. The more user activity they can generate, the more ads they can show. Controversy and debates generate more activity, so social networks are naturally disincentivized from carefully moderating conversations. They have even less incentive to give you access to raw data on the network, which you could otherwise use for sorting and filtering.
    </p>
    <p>
    Unlike social networks, truffles are hosted by individuals. Since the format is open, truffle publishers can add any structured information desired, which end-users can then use for filtering. Also, truffle publishers are responsible for publishing replies they receive, which decreases the likelyhood of "drive-by" comments derailing conversations.
    </p>
    <h2>Why the <em>the name</em> "truffle"? 🍫🍬</h2>
    <p>Maybe you'd like to see the <Link to="/reader/">reader</Link>.</p>
  </div>
)

export default IndexPage
