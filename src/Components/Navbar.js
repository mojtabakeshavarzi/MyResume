import { GoHome  } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { IoMailOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><a href="#intro" className="nav-link scrollto "><GoHome className="icons" /> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><RxPerson className="icons" /> <span>About</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><IoMailOutline className="icons" /> <span>Contact</span></a></li>
      </ul>
    </nav>

</>
     );
}

export default Navbar;
