import './Projects.css'
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <h1 className='projects-title'>Class Assignment</h1>
            <div className='projects'>
                <ol className="projects-container">
                    <Link to='/cards'>
                    <li className='projects-list'>Cards</li>
                    </Link>
                    <Link to='/books'>
                    <li className='projects-list'>Books</li>
                    </Link>
                    <Link to='/contributor'>
                    <li className='projects-list'>Contributor</li>
                    </Link>
                </ol>
            </div>
        </div>
    );
}

export default Projects;