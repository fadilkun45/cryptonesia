import React, { useEffect, useState } from 'react'
import Fetch from '../api/Fetch'
import CoinCard from './CoinCard'
import CurrencyFormat from 'react-currency-format';
import Title from './Title';
import SkeletonLoad from './SkeletonLoad';


const Home = () => {
    Title("cryptonesia | home")

    let {result,loadingstat} = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    let {result: high } = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    let {result: low } = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    
    let [search, setSearch] = useState('')
    
    let filteredResult = result && result.filter(results => results.symbol.toLowerCase().includes(search.toLowerCase()) )

    let onSearch = (e) => {
        setSearch(e.target.value)
    }
    let priceBtc = result && result.filter(results => results.symbol.toLowerCase().includes("btc"))

    
    
    // useEffect(() => {
    //     console.log(highSort)
    //     console.log(lowSort)
    // },[] )
    
    return (
        <>
               <div className="container mt-5 mb-10">
           <div className="mx-auto w-5/6 px-4 py-5 border rounded-md bg-green-500 text-white">
            <h2 className=" font-bold text-center text-xl lg:text-3xl">Selamat Datang Di cryptonesia</h2>
                <p className=" font-semibold text-center text-base lg:text-xl mt-2">Harga BTC hari ini : <CurrencyFormat value={result && priceBtc[0].current_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></p>
           </div>
            <div className="w-5/6 mx-auto px-4 py-5 border rounded-md bg-green-500 text-white mt-10">
            <h2 className=" font-bold text-center text-base lg:text-2xl mb-3">cari crypto</h2>

            <input type="text"  className="w-full lg:w-5/6  flex px-5 py-2 border mx-auto outline-none border-3 border-white text-black" onKeyUp={onSearch} placeholder="cari berdasarkan kode contoh btc"/>

                <div className="w-full lg:w-5/6 mx-auto mt-6 rounded-md  bg-white px-4 py-3">
                    {
                        loadingstat && <SkeletonLoad limit={6} />
                    }

                    {
                        result && filteredResult.map((datas) => (
                            <CoinCard key={datas.id} id={datas.id} image={datas.image} rank={datas.market_cap_rank} name={datas.name} symbol={datas.symbol} price={datas.current_price} priceChange={datas.price_change_percentage_24h} volume={datas.total_volume}/>
                        ))
                    }

                    {
                        filteredResult == 0 ? ( <div className="text-center text-indigo-500 font-bold text-base">coin yang anda cari tidak ada</div> ) : ("") 
                    }
                </div>
            </div>
          
        </div>
    
    </>
    )
}

export default Home



// let highSort =  high && high.sort((a, b) => b['current_price'] - a['current_price'])
// let lowSort =  high && high.sort((a, b) =>  a['current_price'] - b['current_price'] )