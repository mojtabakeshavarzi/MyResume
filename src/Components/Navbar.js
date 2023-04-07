import { GoHome  } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { HiOutlineDocument } from "react-icons/hi2";
import { BsCardList } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

function Navbar() {

    return ( 
<>
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#intro" class="nav-link scrollto active"><GoHome className="icons" /> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><RxPerson className="icons" /> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><HiOutlineDocument className="icons" /> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><BsCardList className="icons" /> <span>Portfolio</span></a></li>
        <li><a href="#contact" class="nav-link scrollto"><IoMailOutline className="icons" /> <span>Contact</span></a></li>
      </ul>
    </nav>

</>
     );
}

export default Navbar;