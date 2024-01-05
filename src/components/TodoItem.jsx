import React from 'react';
import TodoEditModal from './TodoEditModal';

export default function TodoItem({ todo, onUpdate, onDelete, onEdit }) {
   const { id, done, title } = todo;

   const handleChange = () => {
      //const done = e.target.checked ? '완료' : '미완료';
      onUpdate(id, done, title);
   };

   const handleDelete = () => {
      onDelete(id);
   };

   return (
      <li className="todo-item">
         <input type="checkbox" id={id} checked={done} onChange={handleChange} />
         <label htmlFor={id}>{title}</label>
         <TodoEditModal todo={todo} onEdit={onEdit} />
         <button onClick={handleDelete}>
            <span className="icon material-symbols-outlined">delete</span>
         </button>
      </li>
   );
}
