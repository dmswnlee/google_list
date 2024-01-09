import { create } from 'zustand';
import axiosCreate from '../utils/api';

export const useTodoStore = create(set => ({
   todos: [],
   setTodos: todos => set({ todos }),
   getTodos: async () => {
      try {
         const res = await axiosCreate.get('/todos');
         set({ todos: res.data });
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onCreate: async text => {
      try {
         const res = await axiosCreate.post('/todos', {
            title: text,
         });

         set(state => ({ todos: [...state.todos, res.data] }));
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onUpdate: async (id, done, title) => {
      try {
         const res = await axiosCreate.put(`todos/${id}`, {
            title,
            done: !done,
         });

         set(state => ({
            todos: state.todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
         }));
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onEdit: async (id, done, text) => {
      try {
         const res = await axiosCreate.put(`/todos/${id}`, {
            title: text,
            done,
         });

         set(state => ({
            todos: state.todos.map(todo => (todo.id === id ? { ...todo, title: text } : todo)),
         }));
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onDelete: async id => {
      try {
         const res = await axiosCreate.delete(`/todos/${id}`, {
            data: {
               id,
            },
         });

         set(state => ({
            todos: state.todos.filter(todo => todo.id !== id),
         }));
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onDeleteAll: async todoIds => {
      try {
         const res = await axiosCreate.delete('/todos/deletions', {
            data: {
               todoIds,
            },
         });

         set(state => ({
            todos: state.todos.filter(todo => todo.done === false),
         }));
      } catch (err) {
         console.error('Error:', err);
      }
   },
   onReorder: async todoIds => {
      try {
         const res = await axiosCreate.put('/todos/reorder', {
            todoIds,
         });
      } catch (err) {
         console.error('Error:', err);
      }
   },
}));
