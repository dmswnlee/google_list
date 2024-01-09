import React from 'react';
import logo from '../assets/logo.svg';

export default function Home() {
   return (
      <div className="home">
         <h1 className="logo">
            <img src={logo} alt="logo" />
         </h1>
         <p className='info'>
            구글 리스트는 할 일을 정리할 수 있는 투두앱 입니다. <br />
            완료된 투두, 해야 할 투두를 확인할 수 있습니다. <br />
            또한 내가 작성한 투두를 검색 기능을 통해 확인할 수 있습니다.
         </p>
         <div className="search-bar">
            <span className="icon material-symbols-outlined">search</span>
            <p>Google List에 오신 걸 환영합니다!</p>
         </div>
      </div>
   );
}
