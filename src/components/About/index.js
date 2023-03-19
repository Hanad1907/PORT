import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img src={
                        require('../../assets/images/Screenshot.jpg')
                    }
                    alt="about-me"
                    className="photo"/>
            </div>
            <div>
                <p>
                    My name is Hanad, I am a student on my first year in Computer Science with a specialization in (Cyber-Security),
                    					I am very passionate about working with Frontend as well as Backend.
                </p>
                <p>
                    Med hvert prosjekt, Så er målet mitt er å engasjere brukere for en best mulig brukererfaring.
                </p>
            </div>
        </section>
    );
}

export default About;
