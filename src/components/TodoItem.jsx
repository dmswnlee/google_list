import React from 'react';
import TodoEditModal from './TodoEditModal';
import { useTodoStore } from '../store/useTodoStore';

export default function TodoItem({ todo }) {
   const { id, done, title } = todo;

   const {onUpdate, onDelete } = useTodoStore();

   const handleChange = (e) => {
      onUpdate(id, done, title);
   };

   const handleDelete = () => {
      onDelete(id);
   };

   return (
      <li className="todo-item">
         <input type="checkbox" id={id} checked={done} onChange={handleChange} />
         <label htmlFor={id} className={done === true ? 'checked' : ''}>
            {title}
         </label>
         <TodoEditModal todo={todo} />
         <button onClick={handleDelete}>
            <span className="icon material-symbols-outlined">delete</span>
         </button>
      </li>
   );
}
