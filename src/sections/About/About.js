import './About.css';
import image from './image.jpg'

function About() {
    return (
      <div id='aboutme' className="About-Section">
        <header className="About-Header">
          <h2>About Me</h2>
          <p>
            I use my software engineering experience to solve complex problems and help teams take on unfamiliar challenges.
            I have also embraced AI as a development tool, creating tooling and processes that help teams use it effectively
            while keeping engineering judgment at the centre.
          </p>
          <p>
            Learning is a big part of how I work. I build personal projects to explore new skills and ideas, and I enjoy
            taking on whatever needs doing.
          </p>
          <p>
            Away from my desk, I enjoy fixing my classic VW van and riding my motorbike.
          </p>
        </header>
        <img src={image} className="About-Image" alt="Gregor Ritchie" />
      </div>
    );
  }
  
  export default About;