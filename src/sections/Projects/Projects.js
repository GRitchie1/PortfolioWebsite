import React from 'react';
import './Projects.css';
import {Project, OpenProject} from '../../components/Project/Project';
import Button from '../../components/Button/Button'
import projectslist from './ProjectsList'

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = projectslist
    this.state = { visibleCount: 2, openProjectID: -1 };
    this.gridRef = React.createRef();
    this.dialogRef = React.createRef();

    this.currentOpenProject = null
    this.handleOpenProject = this.handleOpenProject.bind(this)

  }

  componentDidMount() {
    this.setState({ visibleCount: Math.min(this.getColumnCount(), this.projectslist.length) });
  }

  componentDidUpdate(previousProps, previousState) {
    const wasOpen = previousState.openProjectID !== -1;
    const isOpen = this.state.openProjectID !== -1;

    if (!wasOpen && isOpen) {
      this.previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', this.handleDialogKeyDown);
      this.dialogRef.current?.focus();
    } else if (wasOpen && !isOpen) {
      this.deactivateDialog();
    }
  }

  componentWillUnmount() {
    if (this.state.openProjectID !== -1) {
      this.deactivateDialog(false);
    }
  }

  getColumnCount() {
    const grid = this.gridRef.current;
    if (!grid) return 1;

    return window.getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length;
  }

  handleLoadMoreClick = () => {
    const columnCount = this.getColumnCount();
    this.setState(({ visibleCount }) => ({
      visibleCount: Math.min(
        this.projectslist.length,
        (Math.ceil(visibleCount / columnCount) + 1) * columnCount
      ),
      openProjectID: -1
    }))
  }

  handleOpenProject(id) {
    if (id !== -1) {
      this.lastFocusedElement = document.activeElement;
    }
    this.setState(() => ({
      openProjectID: id
    }))
  }

  handleContactClick = (event) => {
    event.preventDefault();
    this.setState({ openProjectID: -1 }, () => {
      window.history.pushState(null, '', '#contactme');
      document.getElementById('contactme')?.scrollIntoView();
    });
  }

  deactivateDialog(restoreFocus = true) {
    document.body.style.overflow = this.previousBodyOverflow || '';
    document.removeEventListener('keydown', this.handleDialogKeyDown);
    if (restoreFocus) {
      this.lastFocusedElement?.focus();
    }
  }

  handleDialogKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.handleOpenProject(-1);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = this.dialogRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements?.length) {
      event.preventDefault();
      this.dialogRef.current?.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.handleOpenProject(-1);
    }
  }

  loadMoreButton(){
    if (this.state.visibleCount < this.projectslist.length && this.state.openProjectID === -1){
      return(<div className="ProjectsButton"><Button onClick={this.handleLoadMoreClick} text="Load More"></Button></div>)
    }

  }

  showProjects(){
    return(
      <div className='Projects-Container' ref={this.gridRef}>
        {this.projectslist.slice(0, this.state.visibleCount).map((project, index)=>{return(<Project title={project.title} overview={project.overview} img={project.img} index={index} key={index} handleOpenProject={this.handleOpenProject} url={project.url}/>);})}
      </div>
    );
  }

  

  render() {
    return (
      <div id="projects" className="Projects-Section">
        <header className="Projects-Header">
          <h2>Projects</h2>
          <p> Here are some of my current and past projects and experiments.</p>
        </header>
        {this.showProjects()}
        {this.loadMoreButton()}
        {this.state.openProjectID !== -1 && (() => {
          const currentOpenProject = this.projectslist[this.state.openProjectID];
          return (
            <div className="ProjectDialogBackdrop" onClick={this.handleBackdropClick}>
              <OpenProject
                title={currentOpenProject.title}
                content={currentOpenProject.content}
                img={currentOpenProject.img}
                handleOpenProject={this.handleOpenProject}
                handleContactClick={this.handleContactClick}
                url={currentOpenProject.url}
                dialogRef={this.dialogRef}
              />
            </div>
          );
        })()}
      </div>
    );
    
  }
}
  
  export default Projects;