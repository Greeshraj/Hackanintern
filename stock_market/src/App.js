import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Orderbookdata from './Components/Orderbook/Orderbookdata';

import './App.css';
import Graph from './Components/Graph/Graph';
import BuySell from './Components/BuySell/BuySell';
import UserPortfolio from './Components/UserPortfolio/UserPortfolio';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Orderbook from './Components/Orderbook/Orderbook';
import Navbar from './Components/Navbar/Navbar';
import Current from './Components/Currentprice/Current';
function App() {
  return (
 <>
 
 <Navbar/>
 <div className="graphorder">
 <Graph/>
 <Orderbook/>
 </div>
<div className="bottom">
<UserPortfolio/>
 <div className="currenttrade">
 <Current/>
 <TransactionHistory/>
 </div>
 <BuySell/>
</div>

 </>
  );
}

export default App;
