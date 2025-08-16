import React from "react";
import mock09 from '../assets/images/realtimechat - Google Chrome 14-08-2025 15_24_04.png';
import mock10 from '../assets/images/Food Product Explorer - Google Chrome 14-08-2025 15_10_34.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://foodshop-rho.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://foodshop-rho.vercel.app/" target="_blank" rel="noreferrer"><h2>FoodShop</h2></a>
                <p> Food Product Explorer: Built a React app to search, filter, and view detailed food product data from the OpenFoodFacts API, with a responsive UI.</p>
            </div>
            <div className="project">
                <a href="https://chatting-application-rust.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://chatting-application-rust.vercel.app/" target="_blank" rel="noreferrer"><h2>Chatting Application</h2></a>
                <p>Real-Time Chat Application
                A dynamic, real-time chat application built with Node.js, Express, and Socket.io. This project demonstrates my ability to build full-stack applications with instant, bidirectional communication. The front end is built with React for a responsive user experience.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;