import { IoChevronForwardOutline } from "react-icons/io5";
import { Slide } from "react-reveal";
import RubberBand from 'react-reveal/RubberBand';

import mojtaba from "../img/00.jpg";

function About() {
  return (
    
    <section id="about">
      <div className="section-title about">
      <RubberBand>
        <h2>
          <span>About</span>
        </h2>
        </RubberBand>
        <Slide top>
        <p>
          My name is Mojtaba Keshavarzi I'm 26 and i'm a Frontend web developer
          Intern.
        </p>
        </Slide>
      </div>
      <div className="aboutlist">
      <Slide left>
        <img
          className="image"
          src={mojtaba}
          alt=""
          width="400px"
          height="200px"
        />
        </Slide>       
        <Slide right>
        <ul className="aboutul">

          <li>
            <IoChevronForwardOutline className="abouticons" />
            Birthday : <span> 13 December 1998</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Website :<span> www.exampleE.com</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Phone :<span> 09221250663</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            City :<span> Tehran</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Age :<span> 25</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Degree :<span> Master</span>
          </li>
        </ul>
        </Slide>
      </div>
      
    </section>
  );
}

export default About;
