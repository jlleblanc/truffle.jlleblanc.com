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
    <p>Truffles (chocolates, not fungi) are small treats of different kinds. You can usually differentiate truffles by their external coating or icing. They're special, rich, and desireable. People seek them out.</p>

    <p>By contrast, cookies leave crumbs everywhere and are used to track you around the Internet. They're shoved into HTTP headers when you aren't looking.</p>

    <h2>Truffle format</h2>

    <p>Truffles are JSON objects with one required property (<code>id</code>) and
      two optional ones (<code>hostId</code> and <code>timestamp</code>). All
      other properties in each truffle are user-defined.
    </p>

    <p>The <code>id</code> property value should be unique. Using a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a> generator for this value is strongly recommended.</p>

    <p>The <code>hostId</code> property is a reference to another truffle's
      <code>id</code>. This allows for replies and threaded conversations.
    </p>

    <p>The <code>timestamp</code> property is the date and time when the truffle
      was originally published. This should be a string representation of the
      date and time in ISO 8601 format. You should be able to generate this
      with the following JavaScript:
    </p>

<pre>date = new Date;
date.toISOString();  // or date.toJSON();</pre>

    <p>Any other properties included in the object are open to interpretation.
      They can either be displayed in a pre-determined format (e.g., whenever
      you see the property <code>coordinates</code>, use it to show a map), or
      they can be displayed as plain-text.</p>

    <h2>Truffle feeds</h2>

    <p>You can create a feed of truffles by placing them in an array in reverse-chronological
      order. <a href="/feed.json">Here is my truffle feed.</a></p>

  </div>
)

export default IndexPage
