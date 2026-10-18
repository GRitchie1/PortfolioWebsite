//import logo from '../../Spiral.png';
import './Main.css';

function Main() {
  return (
    <div id="home" className="MainSection">
        <p className="Main-Eyebrow">Software engineering</p>
        <h1>Gregor Ritchie</h1>
        <p className="Main-Intro">I am a Senior Software Engineer with experience working on large developments, complex refactors, mentoring, and architectural and product decisions.</p>
        <div className="Main-Actions">
          <a className="Main-PrimaryLink" href="#aboutme">About Me</a>
          <a className="Main-SecondaryLink" href="#experience">Experience</a>
        </div>
    </div>
  );
}

export default Main;
