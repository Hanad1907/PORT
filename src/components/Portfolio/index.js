import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Australian Travel Guide ',
            description: 'This is a tour-guide for people that want to visit Australia with desinations to visit and what to do when they are in that specific city',
            image: 'Australia.png',
            technologies: ['HTML/CSS'],
            github: 'https://github.com/Hanad1907/Australian-Travel-Guide'
        }, {
            name: 'Village Simulator',
            description: 'A Village Simulator game where you can click you around , buy houses, swords and defeat monsters in order for monsters to appear you have to click on trees ',
            image: 'Village.png',
            technologies: [
                'HTML/CSS', 'JavaScript'
            ],
            github: 'https://github.com/Hanad1907/Landsby-Simulator'
        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={
                            projects[0]
                        }></Project>
                    </li>
                    <li className="padding">
                        <Project projects={
                            projects[1]
                        }></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
