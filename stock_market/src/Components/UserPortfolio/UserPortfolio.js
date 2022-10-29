import React from 'react'
import "./UserPortfolio.css";
const data = [
    { user: "Anom", stock: 19, fiats: "10" },
    { user: "Megha", stock: 19, fiats: "5" },
    { user: "Subham", stock: 25, fiats: "6"},
    { user: "Anom", stock: 19, fiats: "7" },
    { user: "Megha", stock: 19, fiats: "8" },
    { user: "Subham", stock: 25, fiats: "15"},
  ]
export default function UserPortfolio() {
  return (
      //     USERPORTFOLIO
      <div className="user">
<table>
        <tr>
        <th>User name</th>
          <th>Stocks</th>
          <th>Fiats</th>
        </tr>
        {data.map((val, key) => {
            return (
                <tr key={key}>
              <td>{val.user}</td>
              <td>{val.stock}</td>
              <td>{val.fiats}</td>
            </tr>
          )
        })}
      </table>
          </div>
  )
}
