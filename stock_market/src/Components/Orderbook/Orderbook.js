import React from 'react'
import "./Orderbook.css"
export default function Orderbook() {
  return (
    <div className="orderbook">
        Orderbook
      <div className="buy">
      <table>Buy
  <tr>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>25</td>
    <td>100</td>
  </tr>
  <tr>
    <td>9</td>
    <td>99</td>
  </tr>
</table>
      </div>
      <div className="sell">
      <table>Sell
  <tr>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>101</td>
    <td>17</td>
  </tr>
  <tr>
    <td>100</td>
    <td>7</td>
  </tr>
</table>
</div>
    </div>
  )
}
