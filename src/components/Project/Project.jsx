import React from "react";
import "./Project.css";
import { NavLink } from "react-router-dom";

const Project = () => {
  return (
    <div className="project">
        <div className="cards">
          <div className="cards-inner">
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/a1ge.png"
                        alt="yj"
                        />
                        <p className="text">
                        A Single Page Expense Dashboard that shows the transactions,
                        budgeting, savings and other services on a user's account.
                        </p>
                        <NavLink className="btns" to="https://areke-ayo-expense-dashboard.netlify.app/">
                        View Project Live
                        </NavLink>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/estate.png"
                        alt="yj"
                        />
                        <p className="text">
                       A Real Estate web application that caters to buyers in different countries, each with distinct price ranges. Built with React.js and Vanilla CSS. 
                        </p>
                        <NavLink className="btns" to="https://areke-ayo-real-estate.netlify.app/">
                        View Project Live
                        </NavLink>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/weather.png"
                        alt="yj"
                        />
                        <p className="text">
                        A User Friendly Weather web app that allows users to check the current weather conditions in different cities around the world. Built using React.js and OpenWeather API. 
                        </p>
                        <NavLink className="btns" to="https://areke-ayo-weather-forecast-app.netlify.app/">
                        View Project Live
                        </NavLink>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/commerce.png"
                        alt="yj"
                        />
                        <p className="text">
                        A comprehensive e-commerce website that offers a diverse range of clothing items, jewelry and electronics. Built with React.js, Bootstrap and Redux. 
                        </p>
                        <NavLink className="btns" to="https://areke-ayo-e-commerce-site.netlify.app/">
                        View Project Live
                        </NavLink>
                    </div>
                </div>
                <div className="main-card">
                    <div className="card-content">
                        <img
                        className="img"
                        src="/assets/images/tracker.png"
                        alt="yj"
                        />
                        <p className="text">
                        A Task Tracker that empowers users to efficiently manage their to-do lists helping individuals stay organized and productive in their daily lives.
                        </p>
                        <NavLink className="btns" to="https://areke-ayo-task-tracker.netlify.app/">
                        View Project Live
                        </NavLink>
                    </div>
                </div>
          </div>
        </div>
    </div>
  );
};

export default Project;
