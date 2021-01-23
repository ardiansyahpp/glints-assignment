import './Projects.css'
import { Link } from "react-router-dom";

const Projects = () => {

    const projectStyle ={
        color: 'black',
        textDecoration: 'none'
    }

    return (
        <div>
            <h1 className='projects-title'>Class Assignment</h1>
            <div className='projects'>
                <ol className="projects-container">
                    <Link to='/cards' style={projectStyle}>
                    <li className='projects-list'>Cocktail Cards</li>
                    </Link>
                    <Link to='/books' style={projectStyle}>
                    <li className='projects-list'>Books</li>
                    </Link>
                    <Link to='/contributor' style={projectStyle}>
                    <li className='projects-list'>Contributor</li>
                    </Link>
                </ol>
            </div>
        </div>
    );
}

export default Projects;