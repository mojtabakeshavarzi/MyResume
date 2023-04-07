import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";



function Footer() {
    return ( 
        <div className="footer">
        <div className="footerthings">
        <h2>Mojtaba Keshavarzi</h2>
        <p>FrontEnd WebDeveloper</p>
        <center>
        <div className="social-link second">
            <a href="#/"> <FaTwitter /> </a>
            <a href="#/"> <FaFacebookF /> </a>
            <a href="#/"> <FaInstagram /> </a>
            <a href="#/"> <FaLinkedinIn /> </a>
            <a href="#/"> <IoLogoGithub /> </a>
        </div></center>
        </div>
    
        </div>

     );
}

export default Footer;