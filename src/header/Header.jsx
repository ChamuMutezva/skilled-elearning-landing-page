import React from 'react'
import DarkLogo from '../assets/logo-dark.svg'
import Button from '../components/Button'
import Desktop2xWebp from "../assets/image-hero-desktop@2x.webp"
import Desktop2xPng from "../assets/image-hero-desktop@2x.png"
import DesktopWebp from "../assets/image-hero-desktop.webp"
import DesktopPng from "../assets/image-hero-desktop.png"

import Tablet2xWebp from "../assets/image-hero-tablet@2x.webp"
import Tablet2xPng from "../assets/image-hero-tablet@2x.png"
import TabletWebp from "../assets/image-hero-tablet.webp"
import TabletPng from "../assets/image-hero-tablet.png"

import Mobile2xWebp from "../assets/image-hero-mobile@2x.webp"
import Mobile2xPng from "../assets/image-hero-mobile@2x.png"
import MobileWebp from "../assets/image-hero-mobile.webp"
import MobilePng from "../assets/image-hero-mobile.png"



function Header() {
    return (
        <header className="header">
            <nav className="nav flex">
                <a href="/" className="btn-logo">
                    <img src={DarkLogo} alt="" />
                </a>

                <Button />
            </nav>
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Maximize skill, minimize budget</h1>

                    <p className="hero-text">
                        Our modern courses across a range of in-demand skills will give you the
                        knowledge you need to live the life you want.
                    </p>

                    <Button bgPink={true} />
                </div>
                <div className="hero-img-container">
                    
                        <picture>
                            <source media="(min-width: 61.25rem)"
                                srcSet={`${Desktop2xWebp}, ${Desktop2xPng}, ${DesktopWebp},  ${DesktopPng} `}
                            />
                            <source media="(min-width: 38.75rem)"
                                srcSet={`${Tablet2xWebp}, ${Tablet2xPng}, ${TabletWebp},  ${TabletPng} `}
                            />
                            <img className="hero-img" srcSet={`${Mobile2xWebp}, ${Mobile2xPng}, ${MobileWebp} `}
                                src={`${MobilePng}`}
                                alt=""
                            />
                        </picture>
                    
                </div>
            </div>
        </header>
    )
}

export default Header