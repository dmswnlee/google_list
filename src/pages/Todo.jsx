import React, { useState } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

export default function Todo() {
   return (
      <div className="todo">
         <div className="todo-wrapper">
            <TodoList />
         </div>
      </div>
   );
}
