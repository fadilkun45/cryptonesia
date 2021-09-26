import  Title  from './Title.js'
import React from 'react'
import reactimg from '../img/react.svg'
import tailwindimg from '../img/tailwind.svg'


const About = () => {
    Title("cryptonesia | about")

    return (
        <div className="container mx-auto">
             <h3 className="text-indigo-700 text-xl lg:text-3xl mt-5 text-center font-bold ">About cryptonesia</h3>
             <p className="text-indigo-700 text-base lg:text-xl mt-4 text-center font-normal ">build with</p>
               <div className="flex w-3/6 mx-auto justify-around mt-5">
               <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <img src={reactimg} className="w-3/6 h-auto" alt="reactjs" />
                </div>
                <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <img src={tailwindimg} className="w-3/6 h-auto" alt="reactjs" />
                </div>
               </div>
               <p className="text-indigo-700 text-2xl mt-6  text-center">Api From</p>
               <div className="flex w-3/6 mx-auto justify-around">
               <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <a className="text-indigo-700 text-sm lg:text-2xl mt-4 font-bold underline whitespace-nowrap" href="https://www.coingecko.com/en/api/documentation?">coingecko</a>
                </div>
                <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <a className="text-indigo-700 text-sm lg:text-2xl mt-4 font-bold underline" href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/">bing news</a>
                </div>
               </div>
                <p className="text-base mt-10 text-center">&copy; 2021 Faldi Ramadhan</p>
        </div>
    )
}

export default About
