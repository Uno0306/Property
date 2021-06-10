import React from 'react';

function JoinPage() {
    const join = () => {
        const result = [];
        result.push(
            <table>
                <tr>
                    <td className="JBoard">
                        <input className="JBox" type="text" name="id" id="id"  placeholder="아이디" required />
                    </td>
                    <td>
                        <button className="" onclick="checkId()" >중복확인</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="JBox" type="password" name="pwd" id="pwd" placeholder="비밀번호" required />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="JBox" type="password" name="pwdChk" id="pwdChk" placeholder="비밀번호 확인" required />
                    </td>
                </tr>
                <tr>
                    <input className="JBox" type="text" name="name" id="name" placeholder="이름" required/>
                </tr>
                <tr>
                    <td>
                        <select name="job" id="job">
                            <option value="none">무직</option>
                            <option value="jubu">주부</option>
                            <option value="stu">학생</option>
                            <option value="sol">군인</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick="">회원가입</button>
                    </td>
                </tr>
            </table>
        );
        return result;
    }


    return(
        <div className="JoinWrapper">{join()}</div>
    );
}

export default JoinPage;