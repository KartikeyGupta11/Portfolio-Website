import './Projects.css';
import project_data from './ProjectList';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className='title'>
            <h1>My Projects</h1>
        </div>

        <div className='project-container'>
            {project_data.map((project,index) => {
                return <img key={index} src={project.p_img} alt='' className='img-setter'/>
            })}
        </div>
    </div>
  )
}
export default Projects