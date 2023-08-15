import './Projects.css'

function Projects() {
  return (
    <div id='page-projects' className="page">
      <h1 className='page-h1'>Projects</h1>
      <div id="projects-container">
        <ul id="projects-container-nav-ul">
          <li className='projects-container-nav-li-non-focus'><h2>Bachelor Thesis</h2></li>
          <li id='projects-container-nav-li-focus'><h2>Personal Website</h2></li>
          <li className='projects-container-nav-li-non-focus'><h2>Odoo Reports</h2></li>
        </ul>
        <h2>Personal Website</h2>
        <ul id='projects-container-info-ul'>
          <li>Created with:</li>
          <li>Time Span:</li>
          <li>Status:</li>
          <li>Contributors:</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default Projects;
