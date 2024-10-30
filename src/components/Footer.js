import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter, FaFacebook } from "react-icons/fa";

import '../App.css';


function Footer() {
    return (
        <>

            <div className="Footer">
                
                <div className="footerCompany">
                    <h1 id="footerName">Express Food</h1>
                </div>

                <div className="footerLinks">
                    <ul>
                        <li><a href="#">Get Help</a></li>
                        <li><a href="#">Buy Gift cards</a></li>
                        <li><a href="#">Add your restaurant</a></li>
                        <li><a href="#">Sign up to delivery</a></li>
                        <li><a href="#">Create business account</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Restaurant near me</a></li>
                        <li><a href="#">Pickup near me</a></li>
                        <li><a href="#">About Express food</a></li>
                        <li><a href="#">Shop groceries</a></li>
                    </ul>
                </div>
            </div>

            <div className="footerCopyright">
                <div className="socialMedia">
                    <IoLogoInstagram />
                    <FaTwitter />
                    <FaFacebook />
                </div>
                <div className="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Pricing</a>
                    <p>Do not sell or share my personal informations</p>
                </div>
            </div>
        </>
    );
}

export default Footer;