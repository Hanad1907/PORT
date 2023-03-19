import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href={
                        require("../../assets/files/CV-kopi.pdf")
                    }
                    download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
            <div>
                <h5>Front-End Proficiencies</h5>
                <ol>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>version control/Git</li>
                    <li>responsive design</li>
                </ol>
                <br></br>
                <h5>Back-End Proficiencies</h5>
                <ol>
                    <li>Java</li>
                    <li>NodeJS</li>
                </ol>
                <br></br>
                <h5>Dev Tool Proficiencies</h5>
                <ol>
                    <li>Git</li>
                    <li>npm</li>
                </ol>
                <br></br>
                <h5>Database Proficiencies</h5>
                <ol>
                    <li>MySQL</li>
                    <li>PostgreeSQL (Kali Linux Based)</li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;
