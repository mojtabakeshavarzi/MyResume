import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineDocument } from "react-icons/hi2";
import res from "../img/resume_MojtabaKeshavarzI.pdf";



function Footer() {
    return ( 
        <div className="footer">
        <div className="footerthings">
        <h2>Mojtaba Keshavarzi</h2>
        <p>FrontEnd WebDeveloper</p>
        <center>
        <div className="social-link second">
        <a href="twitter.com/mojtaba62339516" target="_blank"> <FaTwitter /> </a>
                    <a href="https://www.facebook.com/profile.php?id=100025758308477" target="_blank"> <FaFacebookF /> </a>
                    <a href="https://www.linkedin.com/in/mojtaba-keshavarzi-561460195/" target="_blank"> <FaLinkedinIn /> </a>
                    <a href="https://github.com/mojtabakeshavarzi" target="_blank"> <IoLogoGithub /> </a>
                    <a href={res} target="_blank"> <HiOutlineDocument /> </a>
        </div></center>
        </div>
    
        </div>

     );
}

export default Footer;