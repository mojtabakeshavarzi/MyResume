import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function UpButton() {
    const [visible , setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 100) {
            setVisible(false)
        }
    };

    window.addEventListener("scroll",toggleVisible);


    return ( 
        <div className="upbtn" style={{display:visible ? "flex" : "none"}}>
           <a href="#" className="upbtn"><FaAngleUp 
            style={{display:visible ? "flex" : "none"}}/></a>
        </div>
     );
}

export default UpButton;
