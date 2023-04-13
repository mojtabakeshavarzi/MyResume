import { GoHome  } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { IoMailOutline } from "react-icons/io5";

function NavbarMobile() {
    
    return ( 
        <nav className="navmob">
            <ul>
                <li><a href="#intro" className="nav-link scrollto active"> <GoHome className="ic"/><span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrolto"><RxPerson className="ic"/><span>About</span></a></li>
                <li><a href="#contact" className="nav-link scrolto"><IoMailOutline className="ic"/><span>Contact</span></a></li>

            </ul>

        </nav>

     );
}

export default NavbarMobile;

