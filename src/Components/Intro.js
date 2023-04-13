import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import TypeWritterEffect from "react-typewriter-effect";
import { HiOutlineDocument } from "react-icons/hi2";
import res from "../img/resume_MojtabaKeshavarzI.pdf";

function Intro() {
    return ( 
        <>
        <section id="intro">
            <div className="container" >
                <h1>Mojtaba Keshavarzi</h1>
                <div className="texttype">
                <div>I'm 
            <TypeWritterEffect className="typed" 
                 textStyle={{
                    color: '#0563bb',
                    fontSize:'20px',
                }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'FrontEnd Developer',
          'Designer',
          'Freelancer',
        ]}
        multiTextDelay={1500}
        typeSpeed={50}
        multiTextLoop
                  />
                 </div>
    </div>
                <div className="social-links">
                    <a href="twitter.com/mojtaba62339516" target="_blank"> <FaTwitter /> </a>
                    <a href="https://www.facebook.com/profile.php?id=100025758308477" target="_blank"> <FaFacebookF /> </a>
                    <a href="https://www.linkedin.com/in/mojtaba-keshavarzi-561460195/" target="_blank"> <FaLinkedinIn /> </a>
                    <a href="https://github.com/mojtabakeshavarzi" target="_blank"> <IoLogoGithub /> </a>
                    <a href={res} target="_blank"> <HiOutlineDocument /> </a>
                </div>
            </div>
        </section>
        </>
        
     );
}

export default Intro;