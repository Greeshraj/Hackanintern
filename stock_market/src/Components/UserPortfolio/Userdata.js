import React from 'react'

const Userdata = ({data}) => {
  return (
          <div className="user">
<table>
        <tr>
        <th>User name</th>
          <th>Stocks</th>
          <th>Fiats</th>
        </tr>

       {data?.map(s => {
        return(

        <tr key = {s.id}>
          <td>{s.username}</td>
          <td>{s.stocks}</td>
          <td>{s.fiat}</td>
        </tr>
        )
       })}


        
      </table>
          </div>
  )
}

export default Userdata