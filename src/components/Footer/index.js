import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/Hanad1907" target="_blank" rel="noopener noreferrer">
                    <img src={
                            require("../../assets/logos/github-logo.png")
                        }
                        alt="Github"
                        className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/hanad-ali-073bab1a9/" target="_blank" rel="noopener noreferrer">
                    <img src={
                            require("../../assets/logos/linkedin-logo.png")
                        }
                        alt="LinkedIn"
                        className="logo"></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
