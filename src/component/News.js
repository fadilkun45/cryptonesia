import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import Fetch from '../api/Fetch'
import NewsFetch from '../api/NewsFetch';
import NewsCard from './NewsCard';
import Title from './Title';

const News = () => {
    Title("cryptonesia | news")

    let [filter,setFilter ] = useState('crypto')
    let {result,loadingstat} = Fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    let {newsresult,loadingstat : loadingnews} = NewsFetch("https://bing-news-search1.p.rapidapi.com/news/search?q=" + filter + "&safeSearch=Off&textFormat=Raw&freshness=Day&count=25")

    newsresult && console.log(newsresult)
    
    let priceBtc = result && result.filter(results => results.symbol.toLowerCase().includes("btc"))
    

    let onFilter = (e) => {
        setFilter(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div className="container mx-auto mt-5">
             <h2 className="text-indigo-500 font-bold text-center text-xl lg:text-3xl">news crypto</h2>
            <h2 className="text-indigo-500 font-semibold text-center text-base lg:text-xl mt-2">Harga BTC hari ini : <CurrencyFormat value={result && priceBtc[0].current_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h2>

          <div className="flex flex-col justify-between w-5/6 mx-auto lg:mx-0 mt-3 lg:mt-0 lg:w-2/6">
          <p className="text-indigo-500 font-bold text-base lg:text-xl">filter berdasarkan jenis crypto</p>
            <select className="mt-2 border w-2/6 outline-none w-3/6" onChange={onFilter}>
                <option value="crypto" >semua</option>
                {
                    result && result.map(res => (
                        <option value={res.id}>{res.id}</option>
                    ))
                }
            </select>
          </div>

                <div className="flex mx-auto w-full lg:w-5/6 mt-7 flex-col ">
                    {
                        loadingnews && <p className="text-indigo-500 font-bold text-base text-center">loading news</p>

                    }
                  {
                      newsresult && newsresult["value"].map(newsres => (
                        <NewsCard key={newsres.url} title={newsres.name} desc={newsres.description} url={newsres.url} creator={newsres["provider"][0]["name"]} date={newsres.datePublished}/>
                      ))
                  }
                                  {
                    newsresult && newsresult["value"] == 0 ? ( <div className="text-center text-indigo-500 font-bold text-base">berita terkait {filter} tidak ditemukan</div> ) : ("") 
                }
                </div>

        </div>
    )
}

export default News
