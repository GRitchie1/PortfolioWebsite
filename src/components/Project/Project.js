import React from 'react';
import styles from './Project.module.css';
import Button from '../Button/Button'

class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.overview = props.overview
      this.url = props.url
      this.index = props.index
    }
    
    render() {
      return (
        <div className={styles.ProjectContainer}>
          <img className={styles.ProjectImg} src={this.img} alt={this.title}></img>
          <div className={styles.ProjectTextContainer}>
            <h2 className={styles.ProjectText}>{this.title}</h2>
            <div className={styles.ProjectText}>{this.overview}</div>
            <Button onClick={()=>this.props.handleOpenProject(this.index)} link={'#projects'} text="Read More" variant="secondary"></Button>
          </div>
        </div>
      );
    }
  }


  class OpenProject extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.url = props.url
    }
    
    render() {
      return (
        <section
          className={styles.OpenProjectContainer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          tabIndex="-1"
          ref={this.props.dialogRef}
        >
          <button
            className={styles.ProjectCloseButton}
            type="button"
            aria-label="Close project details"
            title="Close"
            onClick={()=>this.props.handleOpenProject(-1)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <img className={styles.OpenProjectImg} src={this.img} alt={this.title}></img>
          <h2 id="project-dialog-title" className={styles.ProjectText}>{this.title}</h2>
          <div className={styles.ProjectText}>{this.content}</div>
          {this.url ? <Button link={this.url} text="Check it out on GitHub"/> : <Button link='#contactme' onClick={this.props.handleContactClick} text="Contact Me"/>}
        </section>
      );
    }
  }


  export {Project, OpenProject}

