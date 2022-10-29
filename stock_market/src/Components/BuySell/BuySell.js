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
  
  return (
   <div className="buysell">
     <div>
      <h2>Stock Form</h2>
      <form>

        <div class="bsupper">
          <label className="lebels">
            
            <select value={value} onChange={(e)=>{
              setValue(e.value)
            }}>
              <option value="buy">BUY</option>
              <option value="shell">SELL</option>
              
            </select>
          </label>
          <label className="lebels">
            
            <select value={value} onChange={(e)=>{
              setValue(e.value)
            }}>
              
              <option value="user1">USER1</option>
              <option value="user2">USER2</option>
              <option value="user3">USER3</option>
              <option value="user4">USER4</option>
              <option value="user5">USER5</option>
              <option value="user6">USER6</option>
              
            </select>
          </label>
          <label className="lebels">
            
            <select value={value} onChange={(e)=>{
              setValue(e.value)
            }}>
              <option value="limit">LIMIT</option>
              <option value="market">MARKET</option>
              
            </select>
          </label>
        </div>
        <label className="labels">
          Stock AMOUNT 
          <input value={value} onChange={(e)=>{
            setValue(e.value)
          }}/>
        </label>
        <label className="labels">
         AT PRICE 
          <input value={value} onChange={(e)=>{
            setValue(e.value)
          }}/>
        </label>

        <div class="submit">
          <button>Place Order</button>
        </div>

      
         
      </form>
      
    </div>
   </div>
  );
}
 