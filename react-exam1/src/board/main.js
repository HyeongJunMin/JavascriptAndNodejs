import React from 'react';
import List from './list';
import GetJsonArr from "../exams/getJsonArr";

function BoardMain() {
    return (
        <div className="BoardMain">
            <p>게시판 연습 메인페이지</p>
            <List></List>

            
            <h2>서버로부터 json타입 배열 받아오는 방법 정리</h2>
            <GetJsonArr></GetJsonArr>
        </div>
    );
}

export default BoardMain;
