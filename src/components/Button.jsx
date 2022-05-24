import React from 'react'

function Button(props) {
    const btnPink = props.bgPink ? "btn-pink" : ""
    const btnTextPink = props.textPink ? "btn-text-pink" : ""
    return (
        <a href="/" className={`btn btn-get-started ${btnPink} ${btnTextPink}`}>Get started</a>
    )
}

export default Button