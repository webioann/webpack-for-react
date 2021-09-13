import React from 'react'
import { textContent } from './textContent';
import './app.scss'

function Projects(props) {


    return (
        <section className="projects row">
            <div className="title row">
                <h2>Projects</h2>
            </div>
            {/* ============== USER DATABASE =============== */}
            <div className="user row">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3>User database</h3>
                    </div>
                    <p> {textContent.userDataBaseText} </p>
                    <p> {textContent.userDataBaseText} </p>
                    <p> {textContent.userDataBaseText} </p>
                </div>
                <div className="user-screenshot col-12">
                </div>
            </div>
            {/* ============= SKY WATCHER ==================== */}
            <div className="weather row">
                <div className="discr col-md-6 col-lg-8">
                    <div className="subtitle row">
                        <h3>Sky Watcher</h3>
                    </div>
                    <p> {textContent.skyWatcherText} </p>
                    <p> {textContent.skyWatcherText} </p>
                    <p> {textContent.skyWatcherText} </p>
                </div>
                <div className="weather-screenshot col-md-6 col-lg-4"></div>
            </div>

        </section>
    )
}

export default Projects;
