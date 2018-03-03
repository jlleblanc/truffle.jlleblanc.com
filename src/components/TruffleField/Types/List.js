import React from 'react'

const List = ({ type, value }) => (
  <div>
    <strong>{type}</strong>
    <ul>
      {value.map(listItem => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
  </div>
)

export default List
