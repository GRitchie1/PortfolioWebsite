import './About.css';
import image from './image.jpg'

function About() {
    return (
      <div id='aboutme' className="About-Section">
        <header className="About-Header">
          <h2>About Me</h2>
          <p> 
            I have embraced the use of AI as a tool to aid software development and have designed and implemented tooling and
            processes to use it more effectively, whilst leveraging my software engineering experience to accelerate outcomes.
          </p>
          <p>
            I am driven to learn, and always willing to turn my hand to whatever task needs done. I regularly spend my free time
            building personal projects to learn new skills.
          </p>
          <p> 
            If I'm not at my desk, you can probably find me fixing my classic VW Van or riding my motorbike.
          </p>
        </header>
        <img src={image} className="About-Image" alt="Gregor Ritchie" />
      </div>
    );
  }
  
  export default About;