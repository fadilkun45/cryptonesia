import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://restcountries.com/v3.1/all'

// markets?vs_currency=idr&order=market_cap_desc&per_page=200&page=1&sparkline=false

const headers = {
    mode: 'cors',
}

const createRequest = (url) => ({url, headers});

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => createRequest()
        }),
    })
})

export const { useGetCountryQuery } = countryApi

