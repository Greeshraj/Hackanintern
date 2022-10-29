import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import "./Orderbook.css"
import Orderbookdata from './Orderbookdata';
export default function Orderbook() {
    const [data, setData] = useState();
  const [isloading, setIsLoading]  = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    fetch('http://localhost:5000/')
    .then(res => {
      if(!res.ok){
        throw Error = "could not fetch data"
      }
      return res.json()

    })
    .then(info => {
      setIsLoading(false)
      setData(info)
    })
    .catch(err => {
      setError(err.message)
    })
  }, [data])


  return (
    <Orderbookdata data = {data} />
  )
}
