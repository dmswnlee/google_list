import React, { useEffect, useState, useRef } from 'react';
import TodoEditor from './TodoEditor';
import TodoItem from './TodoItem';
import axiosCreate from '../utils/api';

export default function TodoList({ filters }) {
   const [todos, setTodos] = useState([]);
   const orderRef = useRef(0);

   const [search, setSearch] = useState('');

   const onChangeSearch = e => {
      setSearch(e.target.value);
   };

   const filterTodos = () => {
      if (search === '') {
         return todos;
      }

      return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
   };

   const getTodos = async () => {
      try {
         const res = await axiosCreate.get('/todos');

         setTodos(res.data);
         console.log(res.data);
      } catch (err) {
         console.error('Error:', err);
      }
   };

   useEffect(() => {
      getTodos();
   }, []);

   const onCreate = async text => {
      try {
         const res = await axiosCreate.post('/todos', {
            title: text,
            order: orderRef.current++,
         });

         getTodos(res.data);
      } catch (err) {
         console.error('Error:', err);
      }
   };

   const onUpdate = async (id, done, title) => {
      try {
         const res = await axiosCreate.put(`todos/${id}`, {
            title,
            done: !done,
         });

         setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
      } catch (err) {
         console.error('Error:', err);
      }
   };

   const onEdit = async (id, done, text) => {
      try {
         const res = await axiosCreate.put(`/todos/${id}`, {
            title : text,
            done,
         });

         setTodos(todos.map(todo => (todo.id === id ? { ...todo, text } : todo)));
      } catch (err) {
         console.error('Error:', err);
      }
   };

   const onDelete = async id => {
      try {
         const res = await axiosCreate.delete(`/todos/${id}`, {
            data: {
               id,
            },
         });

         const handleDelete = todos.filter(todo => todo.id !== id);
         setTodos(handleDelete);
      } catch (err) {
         console.error('Error:', err);
      }
   };

   const totalTodo = () => {
      const totalCount = todos.length;
      const doneCount = todos.filter(todo => todo.done).length;
      const notDoneCount = totalCount - doneCount;

      return {
         totalCount,
         doneCount,
         notDoneCount,
      };
   };

   const { totalCount, doneCount, notDoneCount } = totalTodo();

   const filtered = getFilteredItem(todos, filters);

   return (
      <div className="todo-container">
         <div className="todo-search">
            <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
         </div>
         <ul className="list">
            {filtered &&
               filterTodos().map(todo => (
                  <TodoItem 
                     key={todo.id} 
                     todo={todo} 
                     onUpdate={onUpdate} 
                     onDelete={onDelete}
                     onEdit={onEdit} 
                     getTodos={getTodos}
                  />
               ))}
         </ul>
         <TodoEditor onCreate={onCreate} />
         <div className="todo-total">
            <p>
               <span className="material-symbols-outlined">check</span>전체 투두: {totalCount}
            </p>
            <p>
               <span className="material-symbols-outlined">radio_button_unchecked</span>완료 투두: {doneCount}
            </p>
            <p>
               <span className="material-symbols-outlined">close</span>미완료 투두: {notDoneCount}
            </p>
         </div>
      </div>
   );
}

function getFilteredItem(todos, filters) {
   if (filters.map(filter => filter === '전체')) {
      return todos;
   } else if (filters.map(filter => filter === '완료')) {
      return todos.map(todo => todo.done === 'true');
   } else if (filters.map(filter => filter === '미완료')) {
      return todos.map(todo => todo.done === 'false');
   }
   //return todos.done === filters ? '완료' : '미완료';
   //return todos.filter(todo => todo.done === filter);
}
