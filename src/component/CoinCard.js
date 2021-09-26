import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';


const CoinCard = ({image,rank,name,symbol,price,priceChange,volume,id}) => {
    return (
        <Link to={'/detail/' + id} className="coins w-full flex items-center justify-between border-b border-black px-3 py-2 my-2 text-center">
            <p className="text-base text-indigo-600 font-semibold ">{rank}</p>
            <img src={image} alt="crypto" />
            <p className=" text-xs lg:text-base text-indigo-600 font-semibold">{name}</p>
            <p className="text-xs lg:text-base text-indigo-600 font-semibold">{symbol}</p>
            <p className="text-xs lg:text-base text-indigo-600 font-semibold"><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
</p>
            {
                priceChange < 0 ? (<p className="text-xs lg:text-base text-red-600 font-semibold">{priceChange.toFixed(2)}%</p>) : (<p className="text-xs lg:text-base text-green-600 font-semibold">{priceChange.toFixed(2)}%</p>)
            }
            
            <p className="hidden lg:block  text-base text-indigo-600 font-semibold">volume : {volume}</p>
            
        </Link>
    )
}

export default CoinCard
