import './WorkCard.css'
import React from 'react'
import WorkCard from './WorkCard'
import pro1 from '../../Img/project1.png'
import pro2 from '../../Img/project2.png'
import pro3 from '../../Img/project3.png'

const ProjectData = [
    {
        imgsrc: pro1,
        title: "Ecommerce Web",
        text: "Some Text, description of project",
        view: 'portfolio-eladie.vercel.app',
        source: 'https://github.com/Eladie/Portfolio-Eladie'
    },
    {
        imgsrc: pro2,
        title: "Ecommerce Web",
        text: "Some Text, description of project",
        view: 'portfolio-eladie.vercel.app',
        source: 'https://github.com/Eladie/Portfolio-Eladie'
    },
    {
        imgsrc: pro3,
        title: "Ecommerce Web",
        text: "Some Text, description of project",
        view: 'portfolio-eladie.vercel.app',
        source: 'https://github.com/Eladie/Portfolio-Eladie'
    },
   
];

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectData.map((elem,ind) => {
                return (
                    <WorkCard 
                    key={ind}
                    imgsrc={elem.imgsrc}
                    title={elem.title}
                    text={elem.text}
                    view={elem.view}
                    source={elem.source}/>
                )
            })}
        </div>
    </div>
  )
}

export default Work