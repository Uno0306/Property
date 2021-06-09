import React from 'react'; 

function Header() { 
    return ( 
        <header className='header'> 
            <div className="ooh">
                <a href="index.html" id="gam" ><h1 className='gamja'>은행 전세금리</h1></a>
            </div>
            <div className="nav">
                <ul >
                <a href="index2.html"><li className="list">로그인</li></a>
                <a href="button.html"><li className="list">오</li></a>
                <a href="#"><li className="list">아</li></a>
                <a href="#"><li className="list">이</li></a>
                </ul>
            </div>
        </header> 
    ); 
} 

export default Header;
