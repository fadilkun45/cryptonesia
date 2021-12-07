import React from 'react'


const Exchangecard = ({name,image,url,country,rank,trust,since}) => {

    return (
        <a href={url} target="_blank" className="coins hover:bg-gray-700 transition duration-150 bg-white text-green-600 hover:text-white mb-1 px-4 py-3 w-full flex items-center justify-between px-3 py-2 my-2 text-center">
            <div className="w-2/6 md:w-1/6 flex justify-between items-center">
                <div className="w-2/6 lg:w-1/6 flex  ">
                <p className="text-xs lg:text-xl font-semibold ">{rank}</p>
                </div>
                <div className="w-4/6 flex justify-items-start md:justify-center ">
                <img src={image} alt="crypto" className="px-1 py-1 bg-green-600 rounded-full"/>                   
                </div>
            </div>
            <div className="w-3/6 md:w-4/6 flex justify-between md:justify-around items-center ">
                <div className="w-2/6">
                <p className="  text-xs md:text-base font-semibold">{name}</p>
                </div>
                <div className="w-2/6 ">
                <p className= "text-xs md:text-base font-semibold">{country}</p>
                </div>
                <div className="w-2/6 hidden md:block">
                <p className= "text-xs md:text-base font-semibold">{since}</p>
                </div>
            </div>          
            <div className="w-2/6 md:w-1/6 flex flex-row-reverse md:flex-row">
            <p className= "text-xs md:text-base hover:text-white font-semibold">{trust}/10</p>
            </div>   
        </a>
    )
}

export default Exchangecard
