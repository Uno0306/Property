import React from 'react';

function LoginPage() {
    return(
        <div className="loginForm">
            <table className="loginTab">
                <tr>
                    <td>
                        <input className="inputBox"type="text" name="id" id="id" placeholder="아이디" required/>
                    </td>
                </tr>    
                <tr>
                    <td>
                        <input className="inputBox" type="password" name="pwd" id="pwd" placeholder="비밀번호" required/>
                    </td>
                </tr>
                <tr>
                    <td className="LBox">
                        <button className="LBtn" onClick="">로그인</button>
                    </td>
                </tr>
                <tr>
                    <td className="TBox">
                        <button  onClick=""></button>
                        <a href="#!"><p className="TA">아이디 찾기</p></a>
                    </td>
                    <td className="TBox">
                        <a href="#!"><p className="TA">비밀번호 찾기</p></a>
                    </td>
                    <td className="TBox">
                        <a href="/JoinPage"><p className="TA">회원가입</p></a>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default LoginPage;