import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import TypeWritterEffect from "react-typewriter-effect";


function Intro() {
    return ( 
        <>
        <section id="intro">
            <div className="container" >
                <h1>Mojtaba Keshavarzi</h1>
                <div className="texttype">
                <p>I'm 
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
                 </p>
    </div>
                <div className="social-links">
                    <a href="#/"> <FaTwitter /> </a>
                    <a href="#/"> <FaFacebookF /> </a>
                    <a href="#/"> <FaInstagram /> </a>
                    <a href="#/"> <FaLinkedinIn /> </a>
                    <a href="#/"> <IoLogoGithub /> </a>
                </div>
            </div>
        </section>
        </>
        
     );
}

export default Intro;