import React from 'react';

export default function TodoHeader({ filters, filter, onFilterChange }) {
   return (
      <header className="todo-header">
         <button className='delete-all'>전체삭제</button>
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
