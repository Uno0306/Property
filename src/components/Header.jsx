import React from 'react'; 
// import { Link } from 'react-router-dom';


// function Header() { 
//     return ( 
//         <header className='header'> 
//             <div className="ooh">
//                 <a href="index.html" id="gam" ><h1 className='gamja'>은행 전세금리</h1></a>
//             </div>
//             <div className="nav">
//                 <ul >
//                     <li className="list" key="navi">
//                         <a href="/">로그인</a>
//                     </li>
//                     <li className="list" key="navi">
//                         <a href="/join">오</a>
//                     </li>
//                     <li className="list" key="navi">
//                         <a href="#!">아</a>
//                     </li>
//                     <li className="list" key="navi">
//                         <a href="#!">이</a>
//                     </li>
//                 </ul>
//             </div>
//         </header> 
//     ); 
// } 

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li className="list">{props.value}</li>;
}
  
function Header(props) {
    const navos = props.navos;
    const listItems = navos.map((navo) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={navo.toString()}
        value={navo} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
  
    const navos = [<a href="/">로그인</a>, <a href="/join">헿</a>, <a href="#!">낑</a>, <a href="#!">뀨</a>];
    <Header navos={navos} />

export default Header;
