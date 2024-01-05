import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoEditModal({ todo, onEdit }) {
   const { id, done, title } = todo;
   const [editModalOpen, setEditModalOpen] = useState(false);
   const [text, setText] = useState();

   const handleModal = () => {
      setEditModalOpen(!editModalOpen);
   };

   const handleEditChange = e => {
      setText(e.target.value);
   };

   const handleEdit = () => {
      onEdit(id, done, text);
   };

   return (
      <>
         <div className="edit-modal">
            <button className="open-btn" onClick={handleModal}>
               <span className="icon material-symbols-outlined">edit_square</span>
            </button>
         </div>
         {editModalOpen && (
            <div className="modal-container">
               <div className="modal-content">
                  <div className="edit-date">
                     <p>
                        <span className="material-symbols-outlined">check</span>
                        생성일:
                     </p>
                     <p>
                        <span className="material-symbols-outlined">edit</span>
                        수정일:
                     </p>
                  </div>
                  <textarea id={id} value={text} onChange={handleEditChange}></textarea>
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
