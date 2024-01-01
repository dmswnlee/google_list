import React, { useState } from 'react';
import { tabMenu } from '../data/tabMenu';
import { Link } from 'react-router-dom';

export default function Header() {
   const [tabActive, setTabActive] = useState(1);

   return (
      <>
         <nav className="nav">
            <ul className="tab-menu">
               {tabMenu &&
                  tabMenu.map(({ link, name, id }) => (
                     <Link to={link} key={link}>
                        <li
                           onClick={() => {
                              setTabActive(id);
                           }}
                           className={['menu-btn', tabActive === id ? 'menu-active' : 'menu-btn'].join(' ')}>
                           {name}
                           <span className="material-symbols-outlined">close</span>
                        </li>
                     </Link>
                  ))}
            </ul>
         </nav>
         <header className="header">
            <div className="header-wrapper">
               <ul className="icon">
                  <li>
                     <span className="material-symbols-outlined">arrow_back</span>
                  </li>
                  <li>
                     <span className="material-symbols-outlined">arrow_forward</span>
                  </li>
                  <li>
                     <span className="material-symbols-outlined">refresh</span>
                  </li>
               </ul>
               <div className="address-bar">
                  <p>https://googleList.com</p>
               </div>
               <div className="user-name">
                  <p>은주</p>
               </div>
            </div>
         </header>
      </>
   );
}
