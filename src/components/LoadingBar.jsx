import React from 'react';
import spinner from '../assets/Spinner.gif';

export default function LoadingBar() {
  return (
    <div className='loading-bar'>
      <img src={spinner} alt="로딩" />
    </div>
  );
}

