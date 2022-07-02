import React from 'react'
import '../CSS/projects.scss';

function Projects({ children }) {

    return (
        <section className="projects">
            <h1 className="g-deep-title">Projects</h1>
            { children }
        </section>
    )
}

export default Projects;
