const API_KEY = KDT7_GrZ1eYBo;
const USER_NAME = KDT7_LeeEunJoo;
const HEADERS = {
   'content-type': 'application/json',
   APIKEY: API_KEY,
   username: USER_NAME,
};

export async function getTodos() {
   try {
      const res = await axios.get('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos');

      return res.data;
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function addTodos(title, order) {
   try {
      const res = await axios({
         url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
         method: 'POST',
         headers: HEADERS,
         data: {
            title: title,
            order: order,
         },
      });
      // console.log(res.data);
      return res.data;
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function editTodos(title, done, order, id) {
   try {
      const res = await axios({
         url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
         method: 'PUT',
         headers: HEADERS,
         data: {
            title: title,
            done: done,
            order: order,
         },
      });
      // console.log(res.data);
      return res.data;
   } catch (err) {
      console.error('Error:', err);
   }
}

export async function deleteTodos(id) {
   try {
      const res = await axios({
         url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
         method: 'DELETE',
         headers: HEADERS,
      });
      // console.log(res.data);
      return res.data;
   } catch (err) {
      console.error('Error:', err);
   }
}
