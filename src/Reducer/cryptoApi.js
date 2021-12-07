import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3/'

const headers = {
    mode: 'cors',
}

const createRequest = (url) => ({url, headers});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (totalcoins) => createRequest(`coins/markets?vs_currency=idr&order=market_cap_desc&per_page=${totalcoins}&page=1&sparkline=false`)
        }),
        getCryptoDetail: builder.query({
            query: (id) => createRequest(`coins/${id}`)
        }),
        getCryptoPrice: builder.query({
            query: ({id,day}) => createRequest(`coins/${id}/market_chart?vs_currency=idr&days=${day}&interval=daily`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('exchanges?per_page=300')
        }),
    })
})

export const { useGetCryptosQuery,useGetExchangesQuery,useGetCryptoDetailQuery,useGetCryptoPriceQuery } = cryptoApi

