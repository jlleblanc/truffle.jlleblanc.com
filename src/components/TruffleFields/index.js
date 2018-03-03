import React from 'react'
import TruffleField from '../TruffleField'

const TruffleFields = ({ fields }) => (
  <div>
    {fields.map(field => (
      <TruffleField key={field.type} type={field.type} value={field.value} />
    ))}
  </div>
)

export default TruffleFields
