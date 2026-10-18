import './Qualifications.css';
import codecademy from './Codecademy.png'
import htb from './htb.jpg'
import transcript from './GRitchie1 HTB Transcript.pdf'

function Qualifications() {
    return (
      <section id="qualifications" className="Qualification-Section">
        <header className="Qualification-Header">
          <h2>Qualifications</h2>
        </header>

        <section className="Qualification-Group" aria-labelledby="education-heading">
          <h3 id="education-heading">Education</h3>
          <article className="Qualification-Entry">
            <div className="Qualification-EntryHeading">
              <div>
                <h4>HND Mechatronics</h4>
                <p className="Qualification-Institution">City of Glasgow College</p>
              </div>
              <p className="Qualification-Dates">2022</p>
            </div>
            <ul className="Qualification-Details">
              <li>Awarded grade 'A' for the HND Graded Unit.</li>
              <li>Developed an RFID robotic arm as the graded-unit project; see the <a href="#projects">Projects</a> section.</li>
              <li>Coursework included robotics, programming, mechanical and electrical engineering, and cybersecurity.</li>
            </ul>
          </article>

          <article className="Qualification-Entry">
            <div className="Qualification-EntryHeading">
              <div>
                <h4>HNC Mechatronics</h4>
                <p className="Qualification-Institution">City of Glasgow College</p>
              </div>
              <p className="Qualification-Dates">2021</p>
            </div>
            <ul className="Qualification-Details">
              <li>Awarded grade 'A' for the HNC Graded Unit.</li>
            </ul>
          </article>
        </section>

        <section className="Qualification-Group" aria-labelledby="training-heading">
          <h3 id="training-heading">Additional Training</h3>
          <div className="Qualification-TrainingGrid">
            <article className="Qualification-TrainingItem">
              <div>
                <h4>Codecademy</h4>
                <a href="https://www.codecademy.com/profiles/GRitchie1">View profile</a>
              </div>
              <img src={codecademy} alt="" />
            </article>
            <article className="Qualification-TrainingItem">
              <div>
                <h4>Hack The Box Academy</h4>
                <a href={transcript}>View transcript</a>
              </div>
              <img src={htb} alt="" />
            </article>
          </div>
        </section>
      </section>
    );
  }
  
  export default Qualifications;