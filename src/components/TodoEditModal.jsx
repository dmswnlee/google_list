import React, { useRef, useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export default function TodoEditModal({ todo }) {

   const { onEdit } = useTodoStore();

   const { id, done, title } = todo;
   const [editModalOpen, setEditModalOpen] = useState(false);
   const [text, setText] = useState();
   const modalClose = useRef();

   const handleModal = () => {
      setEditModalOpen(!editModalOpen);
   };

   const handleEditChange = e => {
      setText(e.target.value);
   };

   const handleEdit = () => {
      onEdit(id, done, text);
      handleModal();
   };

   const handleModalClose = e => {
      if (e.target === modalClose.current) {
         setEditModalOpen(false);
      }
   };

   return (
      <>
         <div className="edit-modal">
            <button className="open-btn" onClick={handleModal}>
               <span className="icon material-symbols-outlined">edit_square</span>
            </button>
         </div>
         {editModalOpen && (
            <div 
               className="modal-container" 
               ref={modalClose} 
               onClick={handleModalClose}
            >
               <div className="modal-content">
                  <div className="edit-date">
                     <p>
                        <span className="material-symbols-outlined">check</span>
                        {`생성일:  ${editDate(todo.createdAt)}`}
                     </p>
                     <p>
                        <span className="material-symbols-outlined">edit</span>
                        {`수정일:  ${editDate(todo.updatedAt)}`}
                     </p>
                  </div>
                  <textarea id={id} defaultValue={title} onChange={handleEditChange}></textarea>
                  <div className="edit-btn">
                     <button onClick={handleEdit}>저장</button>
                     <button onClick={handleModal}>닫기</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

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
