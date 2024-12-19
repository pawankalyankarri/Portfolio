import './projects.css';
import ProjectsData from '../../assets/ProjectsData'
const Projects = () => {
    return(
        <div id='projects' className='projects'>
            <div className='projects-title'>
                <h1>My Projects</h1>
            </div>
            <div className="project-container">
            {ProjectsData.map(project => (
                <div key={project.id} className='project'>
                    <h2>{project.name}</h2>
                </div>

            ))}
            </div>
        </div>
    )
}
export default Projects;