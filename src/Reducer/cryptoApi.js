import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/'

// markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false

const createRequest = (url) => ({url});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (totalcoins) => createRequest(`markets?vs_currency=idr&order=market_cap_desc&per_page=${totalcoins}&page=1&sparkline=false`)
        }),
    })
})

export const { useGetCryptosQuery } = cryptoApi

