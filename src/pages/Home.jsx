import React from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Home() {
   return (
      <div className="home">
         <h1 className="logo">
            <img src={logo} alt="logo" />
         </h1>
         <p>
            구글리스트 소개
         </p>
         <div className="search-bar">
            <span className="icon material-symbols-outlined">search</span>
            <p>Google List에 오신 걸 환영합니다!</p>
         </div>
      </div>
   );
}
