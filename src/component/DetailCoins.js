import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useGetCryptoDetailQuery, useGetCryptoPriceQuery } from '../Reducer/cryptoApi'
import CurrencyFormat from 'react-currency-format';
import Title from './Title';
import thumb from '../img/react.svg'
import { Line } from 'react-chartjs-2';
import HTMLReactParser from 'html-react-parser'


const DetailCoins = () => {

    let { id } = useParams()
    let [filter, setFilter] = useState(7)
    let { data: coinDetail, isFetching } = useGetCryptoDetailQuery(id)
    let { data: priceCoin } = useGetCryptoPriceQuery({ id, day: filter })

    let onFilter = (e) => {
        setFilter(e.target.value)
    }


    Title("detail " + id)

    const coinPrice = [];
    const coinTimeStamp = [];

    for (let i = 0; i < priceCoin?.prices.length; i++) {
        coinPrice.push(priceCoin && priceCoin?.prices[i][1]
        )
        coinTimeStamp.push(new Date(priceCoin && priceCoin?.prices[i][0]).toLocaleDateString())
    }


    // useEffect(() => {
        // console.log(coinTimeStamp)
    //     console.log(coinPrice)
    // }, [coinTimeStamp])

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'harga di rupiah',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0f43fc',
                borderColor: '#303030',
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        maintainAspectRatio: false
    };



    if (isFetching) return <div className=" w-full h-screen flex items-center justify-center px-4 py-5 bg-green-500">
        <h2 className="text-white text-2xl text-center">sedang memuat data koin {id}</h2>
    </div>

    return (
        <div className="container md:w-5/6 mb-20 mx-auto mt-10 bg-green-500 rounded-md px-4 py-5">
            <div className="flex flex-col md:w-5/6 mx-auto bg-white rounded-md px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between w-full mx-auto">
                    <img src={coinDetail ? coinDetail?.image?.large : thumb} alt="cointhumb" className="w-4/6 mx-auto mb-5 md:mb-0 md:w-1/6 bg-green-500 rounded-full px-1 py-1 h-auto" />
                    <div className="w-5/6 md:w-4/6 xl:w-5/6 ml-6 text-green-600 flex flex-col">
                        <h1 className="text-xl text-center md:text-left md:text-2xl font-bold capitalize">detail koin {coinDetail?.id}</h1>
                        <h2 className="text-base text-center md:text-left md:text-xl mt-1 capitalize">Harga {coinDetail?.id} : <CurrencyFormat value={coinDetail && coinDetail?.market_data?.current_price?.idr} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /> </h2>
                        <p className="text-base mt-1 text-center md:text-left">kode koin : {coinDetail?.symbol}</p>
                        <div className="flex mt-2 flex-col lg:flex-row whitespace-nowrap">
                            <p className="text-base mb-1 text-center text-center lg:w-1/5">market cap rank : {coinDetail?.market_cap_rank}</p>
                            <p className="text-base mb-1 text-center md:mx-7 lg:w-1/5">coincegko rank : {coinDetail?.coingecko_rank}</p>
                            <p className="text-base mb-1 text-center lg:w-1/5">alexa rank : {coinDetail?.public_interest_stats?.alexa_rank} </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:w-5/6 mx-auto mt-10 bg-white rounded-md px-4 py-3">

                <div className="flex justify-around flex-col w-full mx-auto text-green-600">
                    <h2 className="text-2xl text-center font-bold">Chart Harga koin {id}</h2>

                    <select className="border px-1 py-1 w-full rounded-md font-bold bg-green-500 text-center mx-auto md:w-3/6 mt-4 mb-6 outline-none text-white" onChange={onFilter}>
                        <option value="7">7 hari</option>
                        <option value="7">10 hari</option>
                        <option value="14">14 hari</option>
                        <option value="30">1 bulan</option>
                        <option value="360">1 tahun</option>
                        <option value="max">semua</option>
                    </select>

                    <div className="mt-4 w-full h-60 md:w-5/6 mx-auto">
                        <Line data={data} options={options} />
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:w-5/6 mx-auto mt-10 bg-white rounded-md px-4 py-3">

            <div className="flex justify-around flex-col w-full mx-auto text-green-600">
               <h2 className="text-2xl text-center font-bold">deskripsi {id}</h2>
                 <p className="deskripsi text-sm md:text-base ">{HTMLReactParser(coinDetail?.description?.id)}</p>
            </div>

            </div>

        </div>
    )
}

export default DetailCoins
