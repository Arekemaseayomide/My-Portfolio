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
                src="/assets/images/gameporte.PNG"
                alt="E-commerce"
              />
              <p className="text">
                A gaming platform that allows gamers to join and host tournaments across various games, fostering a competitive and engaging gaming community.
              </p>
              <a
                className="btns"
                href="https://app.gameporte.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project Live
              </a>
            </div>
          </div>
          <div className="main-card">
            <div className="card-content">
              <img
                className="img"
                src="/assets/images/nuture.PNG"
                alt="E-commerce"
              />
              <p className="text">
                A landing page for Nuture Technology, a technology company. The site effectively showcases its features and functionality while advertising other products, serving as a hub for potential clients and stakeholders.
              </p>
              <a
                className="btns"
                href="https://nuture.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project Live
              </a>
            </div>
          </div>
          <div className="main-card">
            <div className="card-content">
              <img
                className="img"
                src="/assets/images/porteshop.PNG"
                alt="E-commerce"
              />
              <p className="text">
                A comprehensive e-commerce website that offers a diverse range
                of gaming vouchers, gift-cards, airtime and data. Built with
                React.js, TailwindCSS and Redux.
              </p>
              <a
                className="btns"
                href="https://shop.gameporte.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <p className="text">
                An open-source AI prompting tool for the modern world to
                discover, create and share creative prompts. Built with Next.js,
                Tailwind CSS and Mongodb.
              </p>
              <a
                className="btns"
                href="https://areke-ayo-share-prompts.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <p className="text">
                A Single Page Expense Dashboard that shows the transactions,
                budgeting, savings and other services on a user's account.
              </p>
              <a
                className="btns"
                href="https://areke-ayo-expense-dashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <p className="text">
                A Real Estate web application that caters to buyers in different
                countries, each with distinct price ranges. Built with React.js
                and Vanilla CSS.
              </p>
              <a
                className="btns"
                href="https://areke-ayo-real-estate.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <p className="text">
                A User Friendly Weather web app that allows users to check the
                current weather conditions in different cities around the world.
                Built using React.js and OpenWeather API.
              </p>
              <a
                className="btns"
                href="https://areke-ayo-weather-forecast-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project Live
              </a>
            </div>
          </div>
          {/* <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/commerce.png"
                        alt="E-commerce"
                        />
                        <p className="text">
                        A comprehensive e-commerce website that offers a diverse range of clothing items, jewelry and electronics. Built with React.js, Bootstrap and Redux. 
                        </p>
                        <a className="btns" href="https://areke-ayo-e-commerce-site.netlify.app/" target="_blank" rel="noopener noreferrer">
                        View Project Live
                        </a>
                    </div>
                </div> */}
          <div className="main-card">
            <div className="card-content">
              <img
                className="img"
                src="/assets/images/tracker.png"
                alt="Task Tracker"
              />
              <p className="text">
                A Task Tracker that empowers users to efficiently manage their
                to-do lists helping individuals stay organized and productive in
                their daily lives.
              </p>
              <a
                className="btns"
                href="https://areke-ayo-task-tracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
