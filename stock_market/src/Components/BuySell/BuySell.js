// import React from 'react'
// import "./BuySell.css"
// export default function BuySell() {
//   return (
//     <>
//       <div className="buyshell">
//         BUY/SHELL FORM
//       </div>
      
//     </>
//   )
// }

import React, { useState } from 'react';
import "./BuySell.css"
export default function BuySell() {
  
  const [value, setValue] = useState("");
  const [buy_sell, setBuy_sell] = useState("");
  const [user, setUser] = useState('');
  const [limar, setLimar] = useState('');
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {buy_sell,user,limar,amount,price};

    fetch('http://localhost:5000/post', {
      method: 'POST',
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify(info)
    })
    .then(() => {
      console.log('added')
    })
  }



  return (
   <div className="buysell">
     <div>
      <h2>Stock Form</h2>
      <form onSubmit={handleSubmit}>

        <div class="bsupper">
          <label className="lebels">
            
            <select name = "buy_sell" value={buy_sell} onChange={(e)=>{
              setBuy_sell(e.value)
            }}>
              <option value="buy">BUY</option>
              <option value="shell">SELL</option>
              
            </select>
          </label>
          <label className="lebels">
            
            <select name='user' value={user} onChange={(e)=>{
              setUser(e.value)
            }}>
              
              <option value="User A">User A</option>
              <option value="User B">User B</option>
              <option value="User C">User C</option>
              <option value="User D">User D</option>
              <option value="User E">User E</option>
              <option value="User F">User F</option>
              
            </select>
          </label>
          <label className="lebels">
            
            <select name="limar" value={limar} onChange={(e)=>{
              setLimar(e.value)
            }}>
              <option value="limit">LIMIT</option>
              <option value="market">MARKET</option>
              
            </select>
          </label>
        </div>
        <label className="labels">
          Stock AMOUNT 
          <input name='amount' value={amount} onChange={(e)=>{
            setAmount(e.value)
          }}/>
        </label>
        <label className="labels">
         AT PRICE 
          <input name='price' value={price} onChange={(e)=>{
            setPrice(e.value)
          }}/>
        </label>

        <div class="submit">
          <button name='submit'>Place Order</button>
        </div>

      
         
      </form>
      
    </div>
   </div>
  );
}
 