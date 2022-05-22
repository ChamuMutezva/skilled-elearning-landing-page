import React from 'react'

function Button(props) {
    const btnPink = props.bgPink ? "btn-pink" : ""
  return (
    <a href="/" className={`btn btn-get-started ${btnPink}`}>Get started</a>
  )
}

export default Button