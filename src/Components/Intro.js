import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Typical from "react-typical";

function Intro() {
    return ( 
        <>
        <section id="intro">
            <div className="container" >
                <h1>Mojtaba Keshavarzi</h1>
                <p>I'm {' '}
                <Typical className="typed"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'FrontEnd Developer',1000,
                    'Designer',1000,
                    'Freelancer',1000
                ]}
                 />
                 </p>

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