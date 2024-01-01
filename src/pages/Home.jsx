import React from 'react';
import imgURL from '../assets/logo.svg';

export default function Home() {
   return (
      <div className="home">
         <h1 className="logo">
            <img src={imgURL} alt="logo" />
         </h1>
         <div className="search-bar">
            <span className="icon material-symbols-outlined">search</span>
            <p>Google List에 오신 걸 환영합니다!</p>
         </div>
      </div>
   );
}

