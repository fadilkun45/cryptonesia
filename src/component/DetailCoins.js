import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Fetch from '../api/Fetch'
import CurrencyFormat from 'react-currency-format';
import Title from './Title';


const DetailCoins = () => {
    
    let {id} = useParams()
    let {result,loadingstat} = Fetch("https://api.coingecko.com/api/v3/coins/" + id)
    
    Title("detail " + id)
   
    return (
        <div className="container mx-auto">
            {result && <img src={result["image"]["large"]} className="mx-auto lg:mt-0 mt-10 w-2/6 lg:w-auto" alt={id} /> }
            <h3 className="text-indigo-600 font-bold text-xl lg:text-3xl text-center mt-4 lg:mt-10">Tentang Coin {id}</h3>
            <div className="flex flex-col mt-2 lg:mt-6">
            <div className="price">
            <h4 className="text-indigo-600 font-bold text-xl lg:text-2xl text-left  text-center">Harga Coin {id} : <CurrencyFormat value={result && result["market_data"]["current_price"]["idr"]} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h4>
            </div>
            <p className="text-indigo-700 font-bold text-xl text-center mt-4 lg:mt-10">Deskripsi {id}</p>
            {
             result && result["description"]["en"] === "" ? <p className="text-indigo-600 font-bold text-center mt-10 text-xl ">tidak ada deskripsi untuk koin {id}</p> : result && <p className="deskripsi text-black font-bold text-sm lg:text-base text-justify mt-4 w-5/6 lg:w-auto mx-auto lg:mx-0" dangerouslySetInnerHTML={{__html:result["description"]["en"]}}></p>
            } 
              {
                  loadingstat && <div className="text-indigo-600 font-bold text-center">sedang memuat data</div>
              }     
            </div>

        </div>
    )
}

export default DetailCoins
