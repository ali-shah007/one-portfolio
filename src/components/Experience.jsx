import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'

function Experience() {
    const tech = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'React JS',
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id:5,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-300'
        },
        
        {
            id:7,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        }
        
    ]
  return (
    <div name="experience" className=' bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:px-20'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className=' py-6'>These are the technologies I'hv worked with</p>
            </div>
            <div className='grid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {tech.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className=' w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience