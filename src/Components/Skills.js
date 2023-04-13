import RubberBand from 'react-reveal/RubberBand';

function Skills() {
    return ( 
        <section id="skills">
        <div className="section-title skill">
        <RubberBand>
          <h2>
            <span>SKILLS</span>
          </h2>
          </RubberBand>
          <div className="progress">
          <div className="myskills">
          <label>HTML</label>
            <progress className="p1" value={1}></progress>
            </div>
            <div className="myskills">
            <label>CSS</label>
            <progress className="p2" value={1}></progress>
            </div>
            <div className="myskills">
            <label>BOOTSTRAP</label>
            <progress className="p3" value={.8}></progress>
            </div>
            <div className="myskills">
            <label>JAVASCRIPT</label>
            <progress className="p1" value={.8}></progress>
            </div>
            <div className="myskills">
            <label>REACT</label>
            <progress className="p2" value={.8}></progress>
            </div>
            <div className="myskills">
            <label>JAVA</label>
            <progress className="p3" value={.6}></progress>
            </div>
          </div>
          </div>
        </section>
     );
}

export default Skills;