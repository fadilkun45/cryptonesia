import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = (url) => {
    let [result ,setResult] = useState()
    let [loadingstat ,setLoadingstat] = useState(true)

    useEffect(()=> {
            axios.get(url)
            .then(res => {
                setResult(res.data)
                setLoadingstat(false)
            })
    },[])

   


    return (
        {result,loadingstat}
    )
}

export default Fetch
