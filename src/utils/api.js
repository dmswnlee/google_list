import axios from 'axios';

const axiosCreate = axios.create({
   baseURL: import.meta.env.VITE_URL,
   headers: {
      'Content-Type': 'application/json',
      apikey: import.meta.env.VITE_API_KEY,
      username: 'KDT7_LeeEunJoo',
   },
});

export async function getTodos() {
   try {
      const res = await axiosCreate.get('/todos');

      console.log(res.data);
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function addTodos(title, order) {
   try {
      const res = await axiosCreate.post('/todos', {
         title,
         order,
      });

      console.log(res.data);
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function editTodos(title, done, order, id) {
   try {
      const res = await axiosCreate.put(`todos/${id}`, {
         title,
         done,
         order,
      });
      console.log(res.data);
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function deleteTodos(id) {
   try {
      const res = await axiosCreate.delete(`/todos/${id}`, {
         data: {
            id,
         },
      });
      console.log(res.data);
   } catch (err) {
      console.error('Error:', err);
   }
}
