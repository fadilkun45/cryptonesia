import  Title  from './Title.js'
import React from 'react'
import reactimg from '../img/react.svg'
import tailwindimg from '../img/tailwind.svg'
import ayank from '../img/ayank.jpg'


const About = () => {

    Title("cryptonesia | about")

    return (
        <div className="container mx-auto px-4 py-5 mb-20">
             <h3 className="text-green-700 text-xl lg:text-3xl mt-1 text-center font-bold ">About cryptonesia</h3>
           <div className="container rounded-md md:w-5/6 mt-4 bg-green-500 mx-auto text-white px-4 py-4">

           <p className=" text-xl mt-4 text-center font-normal ">build with</p>

               <div className="flex w-3/6 mx-auto justify-around mt-2">

               <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <img src={reactimg} className="w-3/6 bg-white rounded-full" alt="reactjs" />
                </div>

                <div className="flex mx-auto w-4/6  flex flex-col items-center justify-center">
                <img src={tailwindimg} className="w-3/6 h-10 px-1 py-1 bg-white h-full rounded-full" alt="reactjs" />
                </div>

               </div>

               <p className="text-white text-xl mt-2 text-center">Api From</p>
                <div className="flex w-3/6 mx-auto justify-around">
                <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <a className="text-white text-sm lg:text-2xl mt-4 font-bold underline whitespace-nowrap" href="https://www.coingecko.com/en/api/documentation?">coingecko</a>
                </div>
                <div className="flex mx-auto w-4/6 flex flex-col items-center justify-center">
                <a className="text-white text-sm lg:text-2xl mt-4 font-bold underline" href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/">bing news</a>
                </div>
                </div>
           </div>

            <div className="container py-4 px-2 rounded-md md:w-1/6 mt-4 mx-auto bg-green-500">
            <img src={ayank} alt="gambar ayank" className="w-28 mx-auto h-28 object-cover rounded-full" />
            <p className="text-center text-sm md:text-base text-white mt-4 font-bold">Faldi Ramadhan &copy; 2021</p>
            </div>
        </div>
    )
}

export default About
