import { configureStore  } from "@reduxjs/toolkit";
import { countryApi } from "../Reducer/countryApi";
import { cryptoApi } from "../Reducer/cryptoApi";
import { newsApi } from "../Reducer/newsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,

    }
})