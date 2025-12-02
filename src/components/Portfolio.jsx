

import React from 'react'
import { useState } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from '../projects.json'

const Portfolio = () => {
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'] 
    const [selected, setSelected] = useState('All')
    const filterProjects = projects.filter((el)=> {
        return selected === 'All' ? true : el.category === selected
    })
    
function onSelectFilter(filter) {
    setSelected(filter)  // c помощью setSelected() меняем значение переменной selected
} 
  return (
    <div>
        <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter}/>
        {/* <p>Выбран фильтр: {selected}</p> */}
        <ProjectList projects={filterProjects}/>
        </div>
  )
}

export default Portfolio