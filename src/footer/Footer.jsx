import LightLogo from "../assets/logo-light.svg";
import Button from "../components/Button";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <a href="/" className="btn-logo">
                    <img src={LightLogo} alt="" />
                    <span className="sr-only">welcome to skilled learning</span>
                </a>
                <Button btnFooter={true} />
            </div>
        </footer>
    )
}

export default Footer