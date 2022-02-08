import '../styles/Projects.css'
import ProjectCard from './ProjectCard';

const Projects = () =>{
    return(
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projectCards'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;