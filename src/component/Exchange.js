import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useGetCryptosQuery, useGetExchangesQuery } from "../Reducer/cryptoApi";
import SkeletonLoad from "./SkeletonLoad";
import Exchangecard from "./Exchangecard";
import { useGetCountryQuery } from "../Reducer/countryApi";
import Title from "./Title";

const Exchange = () => {
  let { data: result } = useGetCryptosQuery(200);

  let { data: exchange, isFetching } = useGetExchangesQuery();
  let { data: countryData } = useGetCountryQuery();

  let [filter, setFilter] = useState("");

  const filteredData = exchange?.filter((coin) =>
    coin.country?.toLowerCase().includes(filter.toLowerCase())
  );

  let country = [];

  for (let i = 0; i < countryData?.length; i++) {
    country.push(countryData[i]?.name["common"]);
  }

  useEffect(() => {
    // console.log(country)
    // console.log(exchange && exchange["1"].country)
    // console.log(filteredData)
  }, [exchange]);

  Title("cryptonesia | Exchange");

  let priceBtc =
    result &&
    result.filter((results) => results.symbol.toLowerCase().includes("btc"));

  let onFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-full md:w-5/6 mx-auto px-4 py-5 rounded-md mb-20">
      <div className="w-full md:w-5/6 bg-green-500 mx-auto px-4 py-5 rounded-md">
        <h2 className="text-white font-bold text-center text-xl lg:text-3xl">
          daftar exchange di seluruh dunia
        </h2>
        <h2 className="text-white font-semibold text-center text-base lg:text-xl mt-2">
          Harga BTC hari ini :{" "}
          <CurrencyFormat
            value={result && priceBtc[0].current_price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp."}
          />
        </h2>
      </div>

      {/* filter */}
      <div className="flex flex-col rounded-md bg-green-500 px-4 py-5 text-white items-center w-full md:w-5/6 mx-auto mt-6  ">
        <p className=" font-bold text-base lg:text-xl capitalize ">
          filter berdasarkan negara
        </p>
        <select
          className="mt-3 border px-1 py-1 w-full rounded-md font-bold bg-green-500 text-center  md:w-3/6 outline-none"
          onChange={onFilter}
        >
          <option value="">semua</option>
          {country
            ?.sort((a, b) => a.localeCompare(b))
            .map((item, i) => (
              <option
                value={item}
                className="w-1/6 static text-xs md:text-base"
              >
                {item}
              </option>
            ))}
        </select>
      </div>

      {/* container list */}
      <div className="flex mx-auto w-full md:w-5/6 flex-wrap mt-6 bg-green-500 px-2 md:px-4 py-3 text-white flex-col ">
        {/* data explained */}
        <div className="w-full flex items-center justify-between px-3 py-2 my-2 text-center">
          <div className="w-2/6 md:w-1/6 flex justify-between items-center">
            <div className="w-2/6 lg:w-1/6 flex  ">
              <p className="text-xs md:text-base text-white font-semibold ">
                rank
              </p>
            </div>
            <div className="w-3/6 lg:w-4/6 flex justify-items-start md:justify-center ">
              <p className="text-xs md:text-base text-white font-semibold ">
                logo
              </p>
            </div>
          </div>
          <div className="w-3/6 md:w-4/6 flex justify-between md:justify-around items-center ">
            <div className="w-2/6">
              <p className=" text-xs md:text-base text-white font-semibold">
                exchange
              </p>
            </div>
            <div className="w-2/6 ">
              <p className="text-xs md:text-base text-white font-semibold">
                negara
              </p>
            </div>
            <div className="w-2/6 hidden md:block">
              <p className="text-xs md:text-base text-white font-semibold">
                sejak
              </p>
            </div>
          </div>
          <div className="w-2/6 md:w-1/6 flex flex-row-reverse md:flex-row ">
            <p className="text-xs md:text-base text-white font-semibold">
              trust rank
            </p>
          </div>
        </div>

        {isFetching && <SkeletonLoad limit={6} image={true} />}
        {filteredData?.map((data) => (
          <Exchangecard
            image={data.image}
            name={data.name}
            country={data.country}
            url={data.url}
            since={data.year_established}
            rank={data.trust_score_rank}
            trust={data.trust_score}
          />
        ))}

        {filteredData && filteredData == "" ? (
          <p className="text-white font-bold text-center text-xl lg:text-2xl my-10">
            exchange dari negara {filter} tidak ditemukan
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Exchange;
