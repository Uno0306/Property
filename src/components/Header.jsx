import React from 'react'; 
import { Link } from 'react-router-dom';


const Header = () => { 
    return ( 
        <header className='header'> 
            <div className="ooh">
                <Link to="index.html" id="gam" ><img src='./img/logo_green.png' alt="Bank Property Logo " className="logo"/></Link>
            </div>
            <div className="nav">
                <ul >
                    <li className="list" key="navi1">
                        <Link to="/">로그인</Link>
                    </li>
                    <li className="list" key="navi2">
                        <Link to="/join">오</Link>
                    </li>
                    <li className="list" key="navi3">
                        <Link to="#!">아</Link>
                    </li>
                    <li className="list" key="navi4">
                        <Link to="#!">이</Link>
                    </li>
                </ul>
            </div>
        </header> 
    ); 
}; 

export default Header;
