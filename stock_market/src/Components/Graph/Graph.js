// import React from 'react'
// import Chart from 'chart.js/auto';
// import "./Graph.css"
// export default function Graph() {
//   return (
//      <>
//      <div className="graph">
//         GRAPH
//      </div>
//      </>
//   )
// }
import "./Graph.css"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis} from "recharts";
const simpleData = [
  {
    subject: "React js",
    fees: 120
  },
  {
    subject: "CSS",
    fees: 20
  },
  {
    subject: "javaScript",
    fees: 80
  },
  {
    subject: "HTML",
    fees: 40
  
  },
  {
    subject: "Node.js",
    fees : 150
  },
];
function Graph(){
    return (
 <>
 <div className="graph">
  
      <ResponsiveContainer width="90%" aspect={2} >
       <LineChart data= {simpleData}>
         <XAxis dataKey ="subject" />
         <Line dataKey="fees" />
         <YAxis />
       </LineChart>
      </ResponsiveContainer>
 </div>
  </>
   
    );
};
export default Graph