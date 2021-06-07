import './App.css'
import React from 'react'
// import $ from 'jquery'
import jso from "./bank.json"

function App() {
  
  <div>리턴 밖</div>
  console.log(jso);
  console.log(jso[0].organid);
  
  const banks = () => {
    const result = [];
    for (let index = 0; index < jso.length; index++) {
      const element = jso[index];

      result.push(<h1>{jso[index].organid}</h1>);
    }
    return result;
  }
  



  return (
    <div className="mainboard">
      {jso.forEach(function(item){
        console.log("forEach");
        console.log(item.organid); 
        <h1>{item.organid}</h1>
        console.log("h1 "+item.organid);
        // <h3>{item.bssymdstart}부터{item.bssymdEnd}</h3>
        
      })}

      <div>{banks()}<br></br>RB</div>

      <h1>{jso[0].organid}</h1>
      <h3>{jso[0].bssymdstart}부터 {jso[0].bssymdend}까지</h3>
      <div className="leftBox">
        <p>부분보증비율: {jso[0].interest1_1}</p>
        <p>기준금리: {jso[0].interest2_1}</p>
        <p>가산금리: {jso[0].interest3_1}</p>
        <p>적용금리: {jso[0].interest4_1}</p>
      </div>
      <div className="rightBox">
        <p>부분보증비율: {jso[0].interest1_2}</p>
        <p>기준금리: {jso[0].interest2_2}</p>
        <p>가산금리: {jso[0].interest3_2}</p>
        <p>적용금리: {jso[0].interest4_2}</p>
      </div>

      <div className="bottom">
        <a href="main.html">감자감자</a>
        <p>중간 값</p>
        <p>"data: "</p> 

      </div>
    </div>


  );
  
};


export default App;