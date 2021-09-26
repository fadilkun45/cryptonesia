import React, { useEffect, useState } from 'react'
import Fetch from '../api/Fetch'
import CoinCard from './CoinCard'
import CurrencyFormat from 'react-currency-format';
import Title from './Title';


const Home = () => {
    Title("cryptonesia | home")

    let {result,loadingstat} = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")

    let [search, setSearch] = useState('')

    let priceBtc = result && result.filter(results => results.symbol.toLowerCase().includes("btc"))


    let onSearch = (e) => {
        setSearch(e.target.value)
    }

    let filteredResult = result && result.filter(results => results.symbol.toLowerCase().includes(search.toLowerCase()) )



    return (
        <div className="container mt-5 mb-10">
            <h2 className="text-indigo-500 font-bold text-center text-xl lg:text-3xl">Selamat Datang Di cryptonesia</h2>
            <h2 className="text-indigo-500 font-semibold text-center text-base lg:text-xl mt-2">Harga BTC hari ini : <CurrencyFormat value={result && priceBtc[0].current_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h2>

            <h2 className="text-indigo-600 font-bold text-center text-base lg:text-xl mt-4 lg:mt-10 mb-3">cari crypto</h2>
            <input type="text"  className="w-5/6 lg:w-2/6 flex px-5 py-1 text-indigo-500 border mx-auto outline-none w-3/6 border-3 border-indigo-600" onKeyUp={onSearch} placeholder="cari berdasarkan kode contoh btc"/>

            <div className="w-full lg:w-5/6 mx-auto mt-6 border px-4 py-2">
                {
                    loadingstat && <div className="text-center text-indigo-500 font-bold text-base">Loading</div>
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
    )
}

export default Home
