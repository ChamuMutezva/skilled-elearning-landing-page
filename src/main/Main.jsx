import React from 'react'
import Animation from '../assets/icon-animation.svg'
import Design from '../assets/icon-design.svg'
import Photography from '../assets/icon-photography.svg'
import Crypto from '../assets/icon-crypto.svg'
import Business from '../assets/icon-business.svg'
import Button from '../components/Button'

function Main() {
    return (
        <div className="main container">

            <div className="secondary">
                <h2 className="secondary-title">
                    Check out our most popular courses!
                </h2>
            </div>

            <div className="product">
                <img className="product-img" src={Animation} alt="" aria-hidden={true} />
                <h3 className="product-title">
                    Animation
                </h3>
                <p className="product-description">
                    Learn the latest animation techniques to create stunning motion
                    design and captivate your audience.
                </p>
                
                <Button textPink={true}/>
            </div>

            <div className="product">
                <img className="product-img" src={Design} alt="" aria-hidden={true} />
                <h3 className="product-title">
                    Design
                </h3>
                <p className="product-description">
                    Create beautiful, usable interfaces to help shape the future of
                    how the web looks.
                </p>
                                
                <Button textPink={true}/>
            </div>

            <div className="product">
                <img className="product-img" src={Photography} alt="" aria-hidden={true} />
                <h3 className="product-title">
                    Photography
                </h3>
                <p className="product-description">
                    Explore critical fundamentals like lighting, composition, and focus
                    to capture exceptional photos.
                </p>
                
                <Button textPink={true}/>
              
            </div>

            <div className="product">
                <img className="product-img" src={Crypto} alt="" aria-hidden={true} />
                <h3 className="product-title">
                    Crypto
                </h3>
                <p className="product-description">
                    All you need to know to get started investing in crypto. Go from beginner
                    to advanced with this 54 hour course.
                </p>
                
                <Button textPink={true}/>
               
            </div>

            <div className="product">
                <img className="product-img" src={Business} alt="" aria-hidden={true} />
                <h3 className="product-title">
                    Business
                </h3>
                <p className="product-description">
                    A step-by-step playbook to help you start, scale, and sustain your business
                    without outside investment.
                </p>
                
                <Button textPink={true}/>
              
            </div>
        </div>
    )
}

export default Main