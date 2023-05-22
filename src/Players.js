import React from 'react'

export const Players = (props) => {
  return (
     <h1>Hellow {props.name ? props.name : 'Sachin'}</h1>
  )
}
