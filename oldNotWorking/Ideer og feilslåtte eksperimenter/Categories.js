import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NAVARRAY, LINKCLOSE } from '../constantExports/globalConstants'

function Categories() {
    const [ctgrData, setCtgrData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            setCtgrData(response.data)
        })
    }, [])

        return (
            (ctgrData.map((element, index) => (
                          <h2 key={index}> {NAVARRAY[index]} {element} {LINKCLOSE} </h2>
                          ))
                )
            )
 }

export default Categories
