import React from 'react'
import { useState, useEffect } from 'react';

const Selldata = () => {
           const [data, setData] = useState();
  const [isloading, setIsLoading]  = useState(true);
  const [error, setError] = useState(null);
  const [sell, setSell] = useState(null);

    useEffect(() => {
    fetch('http://localhost:5000/sell')
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
  }, [sell])


  return (
        <table className='tables'>
      <tr>
        <th>Buy</th>
        <th>Price</th>
      </tr>

      {data?.map(s => {
        return(
          <tr>
            <td>{s.bid}</td>
            <td>{s.price}</td>
          </tr>
        )
      })}

    </table>
  )
}

export default Selldata