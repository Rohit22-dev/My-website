import React from 'react'
import './SocialMedia.css'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = () => {
  return (
    <div className="i-link gap-4">
          <a
            href="http://www.github.com/Rohit22-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiGithub className="i-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-78322b207"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiLinkedin className="i-icon" />
          </a>
          <a href="mailto:rkkeepscode@gmail.com" >
            <HiOutlineMail className="i-icon" />
          </a>
        </div>
  )
}

export default SocialMedia