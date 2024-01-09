import React, { useEffect, useState, useMemo } from 'react';
import TodoHeader from './TodoHeader';
import TodoEditor from './TodoEditor';
import TodoItem from './TodoItem';
import axiosCreate from '../utils/api';
import LoadingBar from './LoadingBar';
import { ReactSortable } from 'react-sortablejs';
import { useTodoStore } from '../store/useTodoStore';

const filters = ['all', 'active', 'completed'];

export default function TodoList() {

   const { getTodos, onDeleteAll, onReorder, todos, setTodos } = useTodoStore();

   const [filter, setFilter] = useState(filters[0]);
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState('');

   // 검색
   const onChangeSearch = e => {
      setSearch(e.target.value);
   };

   const filterTodos = () => {
      if (search === '') {
         return filtered;
      }

      return filtered.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
   };

   // 합계 필터
   const { totalCount, doneCount, notDoneCount } = useMemo(() => {
      const totalCount = todos.length;
      const doneCount = todos.filter(todo => todo.done).length;
      const notDoneCount = totalCount - doneCount;

      return {
         totalCount,
         doneCount,
         notDoneCount,
      };
   }, [todos]);

   useEffect(() => {
      getTodos();
      setLoading(false);
   }, []);

   // 전체 삭제
   const handleDeleteAll = () => {
      const deleteArr = todos.map(todo => (todo.done === true ? todo.id : '')).filter(ids => ids !== '');
      if (confirm('완료된 투두를 전체 삭제 하시겠습니까?')) {
         onDeleteAll(deleteArr);
      }
   };

   // 순서변경
   const handleReorder = () => {
      const reordered = todos.map(todo => todo.id);
      onReorder(reordered);
   };

   // 필터링
   const filtered = getFilteredItems(todos, filter);

   return (
      <div className="todo-container">
         {loading ? <LoadingBar /> : null}
         <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter} />
         <div className="todo-search">
            <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
         </div>
         <ul className="list">
            <ReactSortable list={todos} setList={setTodos} animation={200} onEnd={handleReorder()}>
               {filtered &&
                  filterTodos().map(todo => (
                     <TodoItem
                        key={todo.id}
                        todo={todo}
                     />
                  ))}
            </ReactSortable>
         </ul>
         <TodoEditor handleDeleteAll={handleDeleteAll} />
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

function getFilteredItems(todos, filter) {
   if (filter === 'all') {
      return todos;
   } else if (filter == 'active') {
      return todos.filter(todo => todo.done === false);
   } else {
      return todos.filter(todo => todo.done === true);
   }
}
