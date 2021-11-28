import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import Fetch from '../api/Fetch'
import NewsFetch from '../api/NewsFetch';
import { useGetNewsQuery } from '../Reducer/newsApi';
import NewsCard from './NewsCard';
import SkeletonLoad from './SkeletonLoad';
import Title from './Title';

const News = () => {
    Title("cryptonesia | news")

    let [filter,setFilter ] = useState('crypto')
    let {result,loadingstat} = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")

    let {data:newsresult,isFetching } = useGetNewsQuery({ type:filter, count:30 })


    newsresult && console.log(newsresult)
    
    let priceBtc = result && result.filter(results => results.symbol.toLowerCase().includes("btc"))
    

    let onFilter = (e) => {
        setFilter(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div className="container mx-auto mt-5 mb-20 md:mb-0">
           <div className="w-5/6 bg-green-500 mx-auto px-4 py-5 rounded-md">
           <h2 className="text-white font-bold text-center text-xl lg:text-3xl">news crypto</h2>
            <h2 className="text-white font-semibold text-center text-base lg:text-xl mt-2">Harga BTC hari ini : <CurrencyFormat value={result && priceBtc[0].current_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h2>
           </div>

        {/* filter */}
          <div className="flex flex-col rounded-md bg-green-500 px-4 py-5 text-white items-center w-5/6 mx-auto mt-6  ">
          <p className=" font-bold text-base lg:text-xl capitalize ">filter berdasarkan jenis crypto</p>
            <select className="mt-3 border px-1 py-1 rounded-md font-bold bg-green-500 text-center w-3/6 outline-none" onChange={onFilter}>
                <option value="crypto" >semua</option>
                {
                    result && result.map(res => (
                        <option value={res.id}>{res.id}</option>
                    ))
                }
            </select>
          </div>

        <div className="flex mx-auto w-5/6 flex-wrap mt-6 bg-green-500 px-4 py-3 text-white flex-col ">
            {
                isFetching && <SkeletonLoad limit={4} image={false} />
            }
            {
                newsresult && newsresult["value"].map(newsres => (
                <NewsCard key={newsres.url} title={newsres.name} desc={newsres.description} url={newsres.url} creator={newsres["provider"][0]["name"]} img={newsres.thumbnail}  date={newsres.datePublished}/>
                ))
            }
                            {
            newsresult && newsresult["value"] == 0 ? ( <div className="text-center font-bold text-base">berita terkait {filter} tidak ditemukan</div> ) : ("") 
        }
        </div>

        </div>
    )
}

export default News
