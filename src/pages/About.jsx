import React from 'react';
import profile_photo from '../assets/profile_ photo.png';
import { about } from '../data/about';

export default function About() {
   const { name, email, blog, github } = about;

   return (
      <div className="about">
         <div className="profile">
            <div className="profile-photo">
               <img src={profile_photo} alt="개발자의 사진" />
            </div>
            <div className="profile-content">
               <p className="name">{name}</p>
               <p>
                  <a href={`mailto:${email}`} target="_blank">
                     email
                  </a>
               </p>
               <p>
                  <a href={blog} target="_blank">
                     blog
                  </a>
               </p>
               <p>
                  <a href={github} target="_blank">
                     github
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}
