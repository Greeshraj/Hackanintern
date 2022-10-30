import React from 'react'

const Orderbookdata = ({data}) => {
  
  return (
    <table className='tables'>
      <tr>
        <th>Buy</th>
        <th>Price</th>
        <th>Sell</th>
      </tr>

      {data?.map(s => {
        return(
          <tr>
            <td>{s.bid}</td>
            <td>{s.price}</td>
            <td>{s.ask}</td>
          </tr>
        )
      })}

    </table>
  )
}

export default Orderbookdata