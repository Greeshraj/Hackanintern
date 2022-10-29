import React from 'react'
import './Orderbook.css'


const Orderbookdata = ({data}) => {
  return (
    <div className='orderbook'>
      <h5>Orderbook</h5>
      <div className="buy">
      <table className='tables'>
        <tr>
          <th>Buy</th>
          <th>Price</th>
          <th>Sell</th>
        </tr>

        {data?.map(s => {
          return (
            <tr key = {s.id}>
              <td>{s.bid}</td>
              <td>{s.price}</td>
              <td>{s.ask}</td>
            </tr>
          )
        })}
      </table>
      </div>
    </div>
  )
}

export default Orderbookdata