import React from 'react';
import imgURL from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Home() {
   const nav = useNavigate();

   const onClickTodo = () => {
      nav(`/todo`);
   };

   return (
      <div className="home">
         <h1 className="logo">
            <img src={imgURL} alt="logo" />
         </h1>
         <div className="search-bar">
            <span className="icon material-symbols-outlined">search</span>
            <p>Google List에 오신 걸 환영합니다!</p>
         </div>
         <button onClick={onClickTodo}>투두 작성하러 가기</button>
      </div>
   );
}
