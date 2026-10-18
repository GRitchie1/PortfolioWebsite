import './Qualifications.css';
import codecademy from './Codecademy.png'
import htb from './htb.jpg'
import transcript from './GRitchie1 HTB Transcript.pdf'

function Qualifications() {
    return (
      <div id="qualifications" className="Qualification-Section">
        <header className="Qualification-Header">
          <h2>Qualifications</h2>
          <p>
            I studied HND Mechatronics at the City of Glasgow College, Scotland.  I was awarded an A grade for my HND Graded Unit.<br></br>
            As part of my HND Graded Unit I developed a robotic arm to sort items by RFID tag, this can be seen in the <a href="#projects">Projects</a> section.  
            As well as building on existing skills in Robotics and Programming this course also covered Mechanical and Electrical Engineering and Cyber Security. 
          </p>
          <p> 
            Previously, I also completed an HNC in Mechatronics at the City of Glasgow College. 
            I was awarded an A grade for my HNC Graded Unit.<br></br>
          </p>
          <p> 
            I have also undertaken several online courses on CodeCademy and Hack the Box Academy which can be seen in the student transcripts below.
          </p>
        </header>
        <div className='Qualification-LinksContainer'>
          <a className='Qualification-Links' href="https://www.codecademy.com/profiles/GRitchie1">
            <img src={codecademy} alt="Codecademy"></img>
          </a>
          <a className='Qualification-Links' href={transcript}>
            <img src={htb} alt="Hack the Box Academy"></img>
          </a>
        </div>
      </div>
    );
  }
  
  export default Qualifications;