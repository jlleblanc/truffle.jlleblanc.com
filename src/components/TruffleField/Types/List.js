import React from 'react'

const List = ({ type, value }) => (
  <div>
    <h4>{type}</h4>
    <ul>
      {value.map(listItem => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
  </div>
)

export default List
