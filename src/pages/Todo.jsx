import React, { useState } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

const filters = ['전체', '미완료', '완료'];

export default function Todo() {
   const [filter, setFilter] = useState(filters[0]);

   return (
      <div className="todo">
         <div className="todo-wrapper">
            <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter} />
            <TodoList filters={filters} />
         </div>
      </div>
   );
}
