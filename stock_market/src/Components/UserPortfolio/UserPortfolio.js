import React, { useState,useEffect } from 'react'
import "./UserPortfolio.css";
import Userdata from './Userdata';
export default function UserPortfolio() {
   const [data, setData ] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(false)

        useEffect(() => {
    fetch('http://localhost:5000/user')
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
      <Userdata data = {data} />
  )
}
