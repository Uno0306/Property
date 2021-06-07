import './App.css'
import { useEffect, useState } from 'react'
import Profile from './Profile.js'
import axios from 'axios'

function App() {
  //let [step, setStep] = useState(0);
  let [step] = useState(0);
  let [curCard, setcurCardNum] = useState(-1);
  let [Clicked, setClicked] = useState('like');
  let [select, selectAlt] = useState([]);
  let [dat, datAlt] = useState([]);
  
  useEffect(() => {
    //데이터 가져와서 state로 넣기
    axios.get('https://codingapple1.github.io/shop/initialData.json').then((a)=>{
      datAlt([...a.data]);
      console.log(dat);
    });
  },[]);
  

  useEffect(()=>{
    if (curCard !== -1 && Clicked === 'like') {
      Like()
    } else if (curCard !== -1 && Clicked === 'dislike'){
      Hate()
    }
    
  }, [curCard, Clicked])


  function Like(){
    let copy = [...dat];
      copy[curCard].passed = true;
      copy[curCard].liked = 'right';
      datAlt(copy);
      //고른리스트에 추가
      selectAlt([...select, curCard]);
        console.log(select);
  }

  function Hate(){

    let copy = [...dat];
    copy[curCard].passed = true;
    copy[curCard].liked = 'left';
    datAlt(copy);

  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <i className="nav-link fas fa-dog fa-lg"></i>
            </li>
            <li className="nav-item">
              <i className="nav-link fas fa-star fa-lg"></i>
            </li>
            <li className="nav-item">
              <i className="nav-link fas fa-comment fa-lg"></i>
            </li>
            <li className="nav-item">
            <i className="nav-link fas fa-cog fa-lg"></i>
            </li>
          </ul>
      </nav>
      
      { 
      
      //첫로드시 카드, 버튼 보여주기

      dat[0] &&
        
      <div className="p-1 p-container" >
        { dat.map((a,i)=>
          <Profile className="profile" a={a} key={i} 현재카드번호={curCard} step={step} 고른거={select} 고른거변경={selectAlt} 데이터={dat}></Profile>
        )}
        <div className="bottom-buttons">
          <button onClick={()=>{
            if (dat.length > curCard+1){
              setcurCardNum(curCard+1); setClicked('dislike');
            } else {
              alert('더 이상의 유기견은 없습니다.')
            }

            }} className="btn green"><i className="fas fa-times-circle fa-3x"></i></button>
          <button onClick={()=>{
            if (dat.length > curCard+1){
            setcurCardNum(curCard+1); setClicked('like');
            }else {
              alert('유기견을 모두 입양하셨습니다.')
            }
          
          }} className="btn red"><i className="fab fa-gratipay fa-3x"></i></button>
        </div>
      </div>
      
      
      }
    <a href="main.html">감자감자</a>
    <p>dkdkdk</p>
      {
      //고르는거 끝났을 때
      dat.length < curCard+2 
      ? (<h5 className="result">님이 입양할 친구들 : 

        { select.map((data,i)=>{
          return <p className="m-1">{dat[data].name}</p>
        })}

      </h5>) 
      : null
      }
      

      
    </div>
  );
}


export default App;