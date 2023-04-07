function Skills() {
    return ( 
        <section id="skills">
        <div className="section-title skill">
          <h2>
            <span>SKILLS</span>
          </h2>
          <div className="progress">
          <div className="myskills">
          <label>HTML</label>
            <progress value={1}></progress>
            </div>
            <div className="myskills">
            <label>CSS</label>
            <progress value={1}></progress>
            </div>
            <div className="myskills">
            <label>BOOTSTRAP</label>
            <progress value={.8}></progress>
            </div>
            <div className="myskills">
            <label>JAVASCRIPT</label>
            <progress value={.4}></progress>
            </div>
            <div className="myskills">
            <label>REACT</label>
            <progress value={.5}></progress>
            </div>
            <div className="myskills">
            <label>JAVA</label>
            <progress value={.3}></progress>
            </div>
          </div>
          </div>
        </section>
     );
}

export default Skills;