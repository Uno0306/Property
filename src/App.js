// eslint-disable jsx-a11y 접근성 오류검사 회피 주석
/* eslint-disable jsx-a11y/anchor-is-valid  */

import './App.css'
import React from 'react'
// import $ from 'jquery'
import jso from "./bank.json"

function App() {
  
  <div>리턴 밖</div>
  console.log(jso);
  console.log(jso[0].organid);
  
  // Start banks
  const banks = () => {
    const result = [];
    for (let index = 0; index < jso.length; index++) {
      
      result.push(
        <a href="#"><div className={'box'+index}>
          <h1>{jso[index].organid}</h1>
          <h3>{jso[index].bssymdstart}부터 {jso[index].bssymdend}까지</h3>
          <div className="leftBox">
            <p>부분보증비율: {jso[index].interest1_1}</p>
            <p>기준금리: {jso[index].interest2_1}</p>
            <p>가산금리: {jso[index].interest3_1}</p>
            <p>적용금리: {jso[index].interest4_1}</p>
          </div>
          <div className="rightBox">
            <p>부분보증비율: {jso[index].interest1_2}</p>
            <p>기준금리: {jso[index].interest2_2}</p>
            <p>가산금리: {jso[index].interest3_2}</p>
            <p>적용금리: {jso[index].interest4_2}</p>
          </div>
        <br></br>
        </div>
        </a>
      );
    }
    return result;
  } // End banks
  


  return (
    <div className="AppWrraper">
      {/* {jso.forEach(function(item){
        <h1>{item.organid}</h1>
        // <h3>{item.bssymdstart}부터{item.bssymdEnd}</h3>
        
      })} */}
    
      <div className="bankWraaper">{banks()}<br></br><div className="change"></div></div>

    </div>

  );
};


export default App;