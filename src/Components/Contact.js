import { CiLocationOn } from "react-icons/ci";
import { VscMail , VscDeviceMobile } from "react-icons/vsc";

function Contact() {
    return ( 
        <>
            <section id="contact">
                <div className="section-title contact">
                    <h2>
                        <span>Contact</span>
                    </h2>
                    <div className="info">
                    <div className="address sec">
                        <CiLocationOn className="icon" />
                        <h4 className="contactspan">LOCATION :</h4>
                        <p className="contactspan-second">Tehran</p>
                        </div>
                        <div className="email sec">
                        <VscMail className="icon" />
                        <h4 className="contactspan">Email :</h4>
                        <p className="contactspan-second">mojtabakeshavarzi@outlook.com</p>
                        </div>
                        <div className="phone sec">
                        <VscDeviceMobile className="icon" />
                        <h4 className="contactspan">LOCATION :</h4>
                        <p className="contactspan-second">+98 92212506663</p>
                        </div>
                        <div className="inputs">
                        <form>
                            <input className="hp" type="text" placeholder="Your Name"  />
                            <input className="hp" type="email" placeholder="Your Email"  />
                            <div>
                            <input className="hp sub" type="text" placeholder="Subject"  />
                            </div>
                            <textarea placeholder="Message" rows="7"/>  
                            <br/>
                            <center>
                            <button className="btn" type="submit" >Send Message</button>
                            </center>
                        </form>
                        </div>
                        </div>
                    </div>
            </section>
        </>
     );
}

export default Contact;