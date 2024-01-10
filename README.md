# Google List

가장 많이 이용하는 사이트 중 하나 인 구글을 벤치마킹 한 투두앱 사이트 입니다.

REST API 활용하여 CRUD를 구현했습니다.

<br>

✔️ 배포한 사이트

https://google-list.vercel.app/

<br>

✔️ 제작기간

2023.12.22 ~ 2024.01.09

<br>

✔️ 사용기술

React.js, SCSS, Axios, zustand

<br>

<img src='https://github.com/dmswnlee/google_list/blob/main/src/assets/img/todoapp.gif?raw=true' alt='todo-app' />

<br>

✔️ 기능구현

-  API를 활용해 todo Item을 추가, 수정, 삭제 할 수 있습니다.
-  완료된 투두들은 입력창 옆에 있는 버튼을 눌러 전체 삭제 할 수 있습니다.
-  수정 버튼을 누르면 수정 모달창이 떠서 수정할 수 있습니다.
-  all, active, completed로 분류된 필터로 기능이 있습니다.
-  todo Item 체크 시 취소선이 표시됩니다.
-  투두리스트 맨 아래 완료, 미완료, 총합 투두 갯수를 확인할 수 있습니다.
-  todo Item을 등록하고 내가 등록한 아이템을 검색창에 검색하여 찾을 수 있습니다.
-  todo Item 순서를 드래그를 통해 변경할 수 있습니다.
-  목록이 출력되기 전에는 로딩 애니메이션을 출력합니다.

<br>

---

<br>

💡CRUD를 구현하는 상태들은 zustand를 사용해 관리

```jsx
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

   // ...
}));
```

<br>

💡 목록의 순서 변경은 react-sortablejs을 사용

```jsx
// 순서변경
const handleReorder = () => {
   const reordered = todos.map(todo => todo.id);
   onReorder(reordered);
};

<ul className="list">
   <ReactSortable list={todos} setList={setTodos} animation={200} onEnd={handleReorder()}>
      {filtered && filterTodos().map(todo => <TodoItem key={todo.id} todo={todo} />)}
   </ReactSortable>
</ul>;
```

<br>

💡수정 모달창에 api에서 가져온 생성일, 수정일 날짜 표시

<img src='https://github.com/dmswnlee/google_list/blob/main/src/assets/img/todo-02.png?raw=true' alt='수정 모달창' />

<br>

```jsx
function editDate(time) {
   const date = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
   };

   return new Date(time).toLocaleDateString('ko-KR', date);
}
```

<br>

💡API 주소, API KEY와 같은 중요정보 .env 파일로 환경 변수 설정

```js
import axios from 'axios';

const axiosCreate = axios.create({
   baseURL: import.meta.env.VITE_URL,
   headers: {
      'Content-Type': 'application/json',
      apikey: import.meta.env.VITE_API_KEY,
      username: 'KDT7_LeeEunJoo',
   },
});

export default axiosCreate
```

<br>

___

<br>

💻 프로젝트를 통해 배운점

* API를 활용하여 프로젝트를 진행해본 것은 처음이라서 많이 헤매는 느낌이 있었으나 axios를 사용해볼 수 있어서 좋았습니다.
* react-sortablejs과 같은 다양한 리액트 라이브러리에 대해 공부해볼 수 있었습니다.
* 이번 프로젝트를 진행하며 가장 크게 배운점이라고 할 수 있는 건 리액트 상태관리에 대해서 입니다. 내가 사용하는 많은 상태들을 어떻게 관리할 수 있는지 얼마나 가볍게 그리고 쉽게 사용할 수 있는지에 고민해볼 수 있는 시간이었으며 zustand와 같은 상태관리 라이브러리를 활용해 볼 수 있었습니다. 














