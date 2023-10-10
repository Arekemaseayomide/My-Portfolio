import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
        <div className="cards">
          <div className="cards-inner">
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/prompt.png"
                        alt="Prompt"
                        />
                        <h4 className="text">
                        An open-source AI prompting tool for the modern world to discover, create and share creative prompts. Built with Next.js, Tailwind CSS and Mongodb.
                        </h4>
                        <a className="btns" href="https://areke-ayo-share-prompts.vercel.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/prompt.png"
                        alt="Prompt"
                        />
                        <h4 className="text">
                        An open-source AI prompting tool for the modern world to discover, create and share creative prompts. Built with Next.js, Tailwind CSS and Mongodb.
                        </h4>
                        <a className="btns" href="https://areke-ayo-share-prompts.vercel.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/a1ge.png"
                        alt="Dashboard"
                        />
                        <h4 className="text">
                        A Single Page Expense Dashboard that shows the transactions,
                        budgeting, savings and other services on a user's account.
                        </h4>
                        <a className="btns" href="https://areke-ayo-expense-dashboard.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/estate.png"
                        alt="Real Estate"
                        />
                        <h4 className="text">
                       A Real Estate web application that caters to buyers in different countries, each with distinct price ranges. Built with React.js and Vanilla CSS. 
                        </h4>
                        <a className="btns" href="https://areke-ayo-real-estate.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/weather.png"
                        alt="Weather app"
                        />
                        <h4 className="text">
                        A User Friendly Weather web app that allows users to check the current weather conditions in different cities around the world. Built using React.js and OpenWeather API. 
                        </h4>
                        <a className="btns" href="https://areke-ayo-weather-forecast-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/commerce.png"
                        alt="E-commerce"
                        />
                        <h4 className="text">
                        A comprehensive e-commerce website that offers a diverse range of clothing items, jewelry and electronics. Built with React.js, Bootstrap and Redux. 
                        </h4>
                        <a className="btns" href="https://areke-ayo-e-commerce-site.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/tracker.png"
                        alt="Task Tracker"
                        />
                        <h4 className="text">
                        A Task Tracker that empowers users to efficiently manage their to-do lists helping individuals stay organized and productive in their daily lives.
                        </h4>
                        <a className="btns" href="https://areke-ayo-task-tracker.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div>
          </div>
        </div>
    </div>
  );
};

export default Project;
