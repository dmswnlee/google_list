import React, { useRef, useState } from 'react';

export default function TodoEditor({ onCreate, handleDeleteAll }) {
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
