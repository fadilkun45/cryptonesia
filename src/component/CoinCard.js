import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';


const CoinCard = ({image,rank,name,symbol,price,priceChange,volume,id}) => {
    return (
        <Link to={'/detail/' + id} className="coins hover:bg-green-700 transition duration-150 bg-green-600 mb-1 px-4 py-3 w-full flex items-center justify-between px-3 py-2 my-2 text-center">
            <div className="w-2/6  lg:w-1/6 flex justify-between items-center">
                <div className="w-1/6 flex  ">
                <p className="text-xs lg:text-xl text-white font-semibold ">{rank}</p>
                </div>
                <div className="w-4/6 flex md:justify-items-start md:justify-center ">
                <img src={image} alt="crypto" className="px-1 py-1 bg-white rounded-full"/>                   
                </div>
            </div>
            <div className="w-2/6 md:w-3/6 lg:w-2/6 flex">
                <div className="w-2/6 hidden md:block">
                <p className=" text-xs lg:text-sm text-white font-semibold">{name}</p>
                </div>
                <div className="w-2/6 md:w-2/6">
                <p className="text-xs lg:text-sm text-white font-semibold">{symbol.length > 5 ? symbol.slice(0,5) + '...' : symbol  }</p>
                </div>
                <div className="w-3/6 ml-5 md:ml-0 md:w-2/6">
                <p className="text-xs lg:text-sm text-white font-semibold"><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /> </p>
                </div>
            </div>
            <div className="ml-5 md:ml-0 w-2/6  lg:w-3/6 flex justify-end md:justify-center">
           <div className="md:w-5/6 lg:w-1/5">
           {
                    priceChange < 0 ? (<p className="text-xs bg-white px-1 py-1 rounded-full lg:text-base text-red-600 font-semibold">{priceChange?.toFixed(2)}%</p>) : (<p className="text-xs lg:text-base bg-white px-1 py-1 rounded-full text-green-600 font-semibold">{priceChange?.toFixed(2)}%</p>)
            }
           </div>
            <div className=" hidden lg:block w-3/5">
            <p className="hidden lg:block  text-sm text-white font-semibold">volume : {volume}</p>
            </div>
            </div>
   

            
        </Link>
    )
}

export default CoinCard
