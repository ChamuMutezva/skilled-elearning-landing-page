import DarkLogo from "../assets/logo-dark.svg";
import Button from "../components/Button";
import Desktop2xWebp from "../assets/image-hero-desktop@2x.webp";
import Desktop2xPng from "../assets/image-hero-desktop@2x.png";
import DesktopWebp from "../assets/image-hero-desktop.webp";
import DesktopPng from "../assets/image-hero-desktop.png";
import Tablet2xWebp from "../assets/image-hero-tablet@2x.webp";
import Tablet2xPng from "../assets/image-hero-tablet@2x.png";
import TabletWebp from "../assets/image-hero-tablet.webp";
import TabletPng from "../assets/image-hero-tablet.png";
import Mobile2xWebp from "../assets/image-hero-mobile@2x.webp";
import Mobile2xPng from "../assets/image-hero-mobile@2x.png";
import MobileWebp from "../assets/image-hero-mobile.webp";
import MobilePng from "../assets/image-hero-mobile.png";

function Header() {
    return (
        <header className="header container">
            <nav className="nav flex">
                <a href="/" className="btn-logo">
                    <img src={DarkLogo} alt="" />
                    <span className="sr-only">welcome to skilled learning</span>
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
                    <Button btnBgPink={true} />
                </div>
                <div className="hero-img-container">
                    <picture>
                        {/*Desktop images */}
                        <source media="(min-width: 61.25rem)" type="image/webp"
                            srcSet={`${DesktopWebp}, ${Desktop2xWebp} 2x`}
                        />
                        <source media="(min-width: 61.25rem)"
                            srcSet={`${DesktopPng}, ${Desktop2xPng} 2x`}
                        />
                        {/*tablet images */}
                        <source media="(min-width: 38.75rem)" type="image/webp"
                            srcSet={`${TabletWebp}, ${Tablet2xWebp} 2x`}
                        />
                        <source media="(min-width: 38.75rem)"
                            srcSet={`${TabletPng}, ${Tablet2xPng} 2x`}
                        />
                        {/*Mobile images */}
                        <source type="image/webp"
                            srcSet={`${MobileWebp}, ${Mobile2xWebp} 2x`}
                        />
                        <img className="hero-img"
                            srcSet={`${MobilePng}, ${Mobile2xPng} 2x`}
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