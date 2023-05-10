import "./WorkCard.css"

import React from 'react'

import { NavLink } from "react-router-dom"

const WorkCrad = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="Project" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">VIEW</NavLink>
                        <NavLink to={props.source} className="btn">SOURCE</NavLink>
                    </div>
                </div>
            </div>   
  )
}

export default WorkCrad