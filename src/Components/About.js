import { BrowserRouter } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";


function About() {
  return (
    <section id="about">
      <div className="section-title">
        <h2>
          <span>About</span>
        </h2>
        <p>
          My name is Mojtaba Keshavarzi I'm 25 and i'm a Frontend web developer
          Intern.
        </p>
      </div>
      <div className="aboutlist">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          width="400px"
          height="200px"
        />
        <ul className="aboutul">
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Birthday : <span> 13 December 1998</span>
          </li>
          <li>
            <IoChevronForwardOutline className="abouticons" />
            Website :<span> www.example.com</span>
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
            Degree :<span> Bachelor</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
