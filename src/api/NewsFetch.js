import React, { useEffect, useState } from 'react'
import Crypopanic from 'cryptopanic'



const NewsFetch = (url) => {
    let [newsresult ,setResult] = useState()
    let [loadingstat ,setLoadingstat] = useState(true)

    useEffect(()=> {
        fetch(url, {
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "93bd68b357msh587c89e97d1316ap17ef48jsn70ac56ae0bc4"
                
            }
        })
        .then(res => res.json())
        .then(res => { 
            setResult(res)
        setLoadingstat(false) })
      
    },[url])


    return (
        {newsresult,loadingstat}
    )
}

export default NewsFetch