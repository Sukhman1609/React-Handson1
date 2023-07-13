
// import './App.css';

import Function from "./Handson/Function";
import Class from "./Handson/Class";
import { useState } from "react";

function App() {
  const [Fstate,setFstate]=useState(false);
  const [Cstate,setCstate]=useState(false);
  console.log(Fstate)
  return (
    <div >
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="xyz">
      <button className="func" onClick={()=>setFstate(!Fstate)}>To see styling with Function Component</button>
      <button className="abc" onClick={()=>setCstate(!Cstate)}>To see styling with Class Component</button></div>
      {Fstate?<Function/>:" "}
      {/* {Fstate && <Function/>} */}
      {/* <Class/> */}
      {Cstate?<Class/>:" "}
    </div>
  );
}

export default App;
