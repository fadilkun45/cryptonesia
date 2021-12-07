import React,{useEffect, useState,} from 'react'
import SkeletonLoad from './SkeletonLoad'
import CoinCard from './CoinCard'
import { useGetCryptosQuery } from '../Reducer/cryptoApi'
import Title from './Title'

const Coins = () => {
  const {data: result, isFetching} = useGetCryptosQuery(200)

  Title("cryptonesia | cryptocurrencies")
    
    useEffect(() => {
        // console.log(result)
    },[result])
  

    let [search, setSearch] = useState('')
    
    let filteredResult = result && result.filter(results => results.symbol.toLowerCase().includes(search.toLowerCase()) )

    let onSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="w-full md:w-5/6 mx-auto px-4 py-5 border mb-20 rounded-md bg-green-500 text-white mt-10">
        <h2 className=" font-bold text-center text-base lg:text-4xl mb-3">cari crypto</h2>

            {isFetching ? 
            <div className="w-full lg:w-5/6  flex px-5 py-2 mx-auto" >
                 <SkeletonLoad limit={1} image={false} />
            </div> :  <input type="text"  className="w-full lg:w-5/6  flex px-1 md:px-5 py-2 border mx-auto outline-none border-3 border-white text-black  rounded-md" onKeyUp={onSearch} placeholder="cari berdasarkan kode contoh btc"/>}

            <div className="w-full lg:w-5/6 mx-auto mt-6 rounded-md  bg-white px-2 md:px-5 py-3">
                {
                    isFetching && <SkeletonLoad limit={6} image={true} />
                }

                {
                    result && filteredResult.map((datas) => (
                        <CoinCard key={datas.id} id={datas.id} image={datas.image} rank={datas.market_cap_rank} name={datas.name} symbol={datas.symbol} price={datas.current_price} priceChange={datas.price_change_percentage_24h} volume={datas.total_volume}/>
                    ))
                }

                {
                    filteredResult == 0 ? ( <div className="text-center text-green-500 font-bold text-base">coin yang anda cari tidak ada</div> ) : ("") 
                }
            </div>
        </div>
    )
}

export default Coins
