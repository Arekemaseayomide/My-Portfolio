import React from 'react'
import './Projects.css'
import Project from '../Project/Project'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
  return (
    <>
        <div>
            <h1 className='projects'>My Projects</h1>
            <Project/>
        </div>
            <div className='contact'>
              <h2 className='name'>Contact Info</h2>
              <div className='icon-link'>
                
                  <a className='call' href="tel:+2348187134313" ><FontAwesomeIcon icon={faPhone} style={{color: "#fafafa",}} /> - +2348187134313</a>
                  <a className="call" href="mailto:mideareke@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /> - mideareke@gmail.com</a>
                
              </div>
              <div className='icon-links'>
                <a href='https://www.linkedin.com/in/ayomide-arekemase-278940243'><FontAwesomeIcon className='links' icon={faLinkedin} style={{color: "#fcfcfd",}} /></a>
                <a href='https://github.com/Arekemaseayomide'><FontAwesomeIcon className='links' icon={faGithub} style={{color: "#f4f5f6",}} /></a>
                <a href='https://x.com/arekeayo?s=21&t=ZoqpRWL_SWAcGyDSRUOIww'><FontAwesomeIcon className='links' icon={faSquareXTwitter} style={{color: "#fafafa",}} /></a>
              </div>
            </div>
    </>
  )
}

export default Projects