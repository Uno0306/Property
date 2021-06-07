import './App.css'
import React from 'react'
// import $ from 'jquery'
import jso from "./bank.json"

function App() {
  
  <div>리턴 밖</div>
  console.log(jso);
  console.log(jso[0].organid);
 
  // function bangk(){
  //   var bangk_text = "";
  //   for(var i=0; i<jso.length-1; i++){
  //     bangk_text += '<div className='+'""'+'>'+
  //       '<h1>'+jso[i].organid+'</h1>'+
  //       '<h2>'+jso[i].bssYmdStart+'부터 '+jso[i].bssYmdEnd}+'까지</h2>'+
  //       '<div>'+
  //         '<p>부분보증비율 : '+jso[i].interest1_1+'</p>'+
  //         '<p>'+jso[i].interest2_1+'</p>'+
  //         '<p>'+jso[i].interest3_1+'</p>'+
  //         '<p>'+jso[i].interest4_1+'</p>'+
  //       '</div>'+
  //       '<div>'+
  //         '<p>'+jso[i].interest1_2+'</p>'+
  //         '<p>'+jso[i].interest2_2+'</p>'+
  //         '<p>'+jso[i].interest3_2+'</p>'+
  //         '<p>'+jso[i].interest4_2+'</p>'+
  //       '</div>'+
  //     '</div>';
  //     console.log("저장됨");
  //     $('#bankVal').append(bangk_text);
  //   };
  
  return (
    <div className="mainboard">
      {jso.forEach(function(item){
        console.log("forEach");
        console.log(item.organid); 
        <h1>{item.organid}</h1>
        console.log("h1 "+item.organid);
        // <h3>{item.bssymdstart}부터{item.bssymdEnd}</h3>
        
      })}
      <h1>{jso[0].organid}</h1>
      <h3>{jso[0].bssymdstart}부터 {jso[0].bssymdend}까지</h3>
      <div>
        <p>부분보증비율: {jso[0].interest1_1}</p>
        <p>기준금리: {jso[0].interest2_1}</p>
        <p>가산금리: {jso[0].interest3_1}</p>
        <p>적용금리: {jso[0].interest4_1}</p>
      </div>
      <div>
        <p>부분보증비율: {jso[0].interest1_2}</p>
        <p>기준금리: {jso[0].interest2_2}</p>
        <p>가산금리: {jso[0].interest3_2}</p>
        <p>적용금리: {jso[0].interest4_2}</p>
      </div>

      <a href="main.html">감자감자</a>
      <p>중간 값</p>
      <p>"data: "</p> 
    </div>


  );
  
};


export default App;