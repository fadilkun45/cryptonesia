import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/'

const headers = {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "93bd68b357msh587c89e97d1316ap17ef48jsn70ac56ae0bc4"
}

const createRequest = (url) => ({url,headers});

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({type,count}) => createRequest(
         `search?q=${type}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
            )
        })
    })
})

export const { useGetNewsQuery } = newsApi