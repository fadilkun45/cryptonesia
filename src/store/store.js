import { configureStore  } from "@reduxjs/toolkit";
import { cryptoApi } from "../Reducer/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    }
})