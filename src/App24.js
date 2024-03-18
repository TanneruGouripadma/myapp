import React from 'react'

export default function App24() {
    const GREET = process.env.REACT_APP_GREET
    const LOCATION = process.env.REACT_APP_LOCATION
  return (
    <div>{GREET},{LOCATION}</div>
  )
}