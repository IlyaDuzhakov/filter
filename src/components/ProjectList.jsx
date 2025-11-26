import React from 'react'

const ProjectList = ({ projects }) => {
    console.log(projects)
  return (
    <div className="project-list">
        {projects.map((el, index)=> {
           return <img src={el.img} key={index} alt="" />
        })}
    </div>
  )
}

export default ProjectList