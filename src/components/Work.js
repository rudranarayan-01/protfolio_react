import "./WorkCard.css"

import React from 'react'
import WorkCrad from "./WorkCrad"
import WorkCradData from "./WorkCardData"


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> Projects </h1>
        <div className="project-container">
            {WorkCradData.map((val,ind) =>{
              return(
                <WorkCrad key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />
              )
            })}
        </div>    
    </div>
  )
}

export default Work