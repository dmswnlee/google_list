import React from 'react';
import logo from '../assets/logo.svg';

export default function TodoHeader({ filters, filter, onFilterChange }) {
   return (
      <header className="todo-header">
         <h1 className="header-logo">Google List</h1>
         <ul className="filters">
            {filters.map((value, index) => (
               <li key={index}>
                  <button
                     className={['filter', filter === value ? 'selected' : 'filter'].join(' ')}
                     onClick={() => onFilterChange(value)}>
                     {value}
                  </button>
               </li>
            ))}
         </ul>
      </header>
   );
}
