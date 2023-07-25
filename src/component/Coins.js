import React, { useEffect, useState, } from 'react'
import SkeletonLoad from './SkeletonLoad'
import CoinCard from './CoinCard'
import { useGetCryptosQuery } from '../Reducer/cryptoApi'
import Title from './Title'

const Coins = () => {
    const { data: result, isFetching } = useGetCryptosQuery(200)

    Title("cryptonesia | cryptocurrencies")

    useEffect(() => {
        console.log(result)
    }, [result])


    let [search, setSearch] = useState({

    })

    let onInput = (evt) => {
        setSearch({...search, [evt.target.name]: evt.target.value })
    }

    let filteredResult = result && result.filter(results => results.symbol.toLowerCase().includes(search.toLowerCase()))

    let onSearch = (e) => {

    }

    return (
        <div className="w-full md:w-5/6 mx-auto px-4 py-5 border mb-20 rounded-md bg-green-500 text-white mt-10">
            <h2 className=" font-bold text-center text-base lg:text-4xl mb-3">cari crypto</h2>

            {isFetching ?
                <div className="w-full lg:w-5/6  flex px-5 py-2 mx-auto" >
                    <SkeletonLoad limit={1} image={false} />
                </div> :
                <div className="w-full lg:w-5/6" >
                    <input type="text" className="w-full lg:w-5/6  flex px-1 md:px-5 py-2 border mx-auto outline-none border-3 border-white text-black  rounded-md" name='kode' onChange={onInput} placeholder="cari berdasarkan kode contoh btc" />
                    <h4>Range Harga</h4>
                    <div className="flex flex-col">
                        <input type="number" className="w-full lg:w-5/6  flex px-1 md:px-5 py-2 border mx-auto outline-none border-3 border-white number-black  rounded-md" name='dari' onChange={onInput}  placeholder="Dari" />
                        <input type="number" className="w-full lg:w-5/6  flex px-1 md:px-5 py-2 border mx-auto outline-none border-3 border-white text-black  rounded-md" name='hingga' onChange={onInput}  placeholder="Hingga" />
                    </div>
                </div>
            }

            <div className="w-full lg:w-5/6 mx-auto mt-6 rounded-md  bg-white px-2 md:px-5 py-3">
                {
                    isFetching && <SkeletonLoad limit={6} image={true} />
                }

                {
                    result && filteredResult.map((datas) => (
                        <CoinCard key={datas.id} id={datas.id} image={datas.image} rank={datas.market_cap_rank} name={datas.name} symbol={datas.symbol} price={datas.current_price} priceChange={datas.price_change_percentage_24h} volume={datas.total_volume} />
                    ))
                }

                {
                    filteredResult == 0 ? (<div className="text-center text-green-500 font-bold text-base">coin yang anda cari tidak ada</div>) : ("")
                }
            </div>
        </div>
    )
}

export default Coins
