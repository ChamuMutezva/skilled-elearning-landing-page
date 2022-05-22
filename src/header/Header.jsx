import React from 'react'
import DarkLogo from '../assets/logo-dark.svg'

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/">
                    <img src={DarkLogo} alt="" />
                </a>
            </nav>
            header
        </header>
    )
}

export default Header