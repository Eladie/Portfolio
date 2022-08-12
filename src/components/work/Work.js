import './WorkCard.css'
import React from 'react'
import WorkCard from './WorkCard'
import pro1 from '../../Img/quiz.png'
import pro2 from '../../Img/Temp-control.png'
import pro3 from '../../Img/Todo.png'
import pro4 from '../../Img/Advice-app.png'
import pro5 from '../../Img/Leading-page.png'


const ProjectData = [
    {
        imgsrc: pro1,
        title: "Quiz",
        text: "Here users can click on option buttons to answer questions, next question rendered each time option is selected and at the end, the final score is displayed.",
        view: 'https://quiz-eladie.vercel.app/',
        source: 'https://github.com/Eladie/Quiz'
    },
    {
        imgsrc: pro2,
        title: "Temperature Control",
        text: "In this app users can increment/decrement temperature and the background color changes based on temperature.",
        view: 'https://temperature-app-xi.vercel.app/',
        source: 'https://github.com/Eladie/Temperature-App'
    },
    {
        imgsrc: pro3,
        title: "Todo app",
        text: "A basic To Do app where users can add/edit/delete their todos list",
        view: 'https://todo-eladie.vercel.app/',
        source: 'https://github.com/Eladie/Todo'
    },
    {
        imgsrc: pro4,
        title: "Advice app",
        text: "A JS app where a voice reads some advices",
        view: 'https://avice-app.vercel.app/',
        source: 'https://github.com/Eladie/Avice-app'
    },
    {
        imgsrc: pro5,
        title: "Leading Page",
        text: "My firs project! With this I started to learn HTML and CSS",
        view: 'https://landingpage-eladie.vercel.app/',
        source: 'https://github.com/Eladie/Landing-Page/tree/final'
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