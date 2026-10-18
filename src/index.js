import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//components
import NavBar from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//Sections
import Main from './sections/Main/Main';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Qualifications from './sections/Qualifications/Qualifications';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Main />
    <About /> 
    <Experience />
    <Qualifications /> 
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
