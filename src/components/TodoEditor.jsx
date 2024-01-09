import React, { useRef, useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export default function TodoEditor({ handleDeleteAll }) {

   const { onCreate } = useTodoStore();

   const [text, setText] = useState('');
   const inputRef = useRef();

   const handleChange = e => setText(e.target.value);
   const handleSubmit = e => {
      e.preventDefault();
      if (text.trim().length === 0) {
         inputRef.current.focus();
         return;
      }
      onCreate(text);
      setText('');
   };

   return (
      <div className='todo-footer'>
         <form className="todo-editor" onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo를 입력해주세요." value={text} onChange={handleChange} ref={inputRef} />
            <button>
               <span className="icon material-symbols-outlined">add</span>
            </button>
         </form>
         <button className="delete-all" onClick={handleDeleteAll}>
            <span className="icon material-symbols-outlined">delete</span>
         </button>
      </div>
   );
}
