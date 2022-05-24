import React from 'react'

function Button(props) {
    const btnPink = props.btnBgPink ? "btn-bg-pink" : ""
    const btnTextPink = props.textPink ? "btn-text-pink" : ""
    const btnFooter = props.btnFooter ? "btn-footer" : ""
    return (
        <a href="/" className={`btn btn-get-started ${btnPink} ${btnTextPink} ${btnFooter}` }>Get started</a>
    )
}

export default Button