import React from 'react';
import gen_dic from './profile.module.css'

const Profile= () => {
    return(
        <div className={gen_dic.profile}>
         <div className={gen_dic.me}>
          <div>
              <img className={gen_dic.avatar} src="https://www.ejin.ru/wp-content/uploads/2019/05/gora-22.jpg" alt=""/>
            </div>
            <div className={gen_dic.name}>
                Elizaveta Lisenkova
            </div>
         </div>
          <div className={gen_dic.description}>
            <ul>
              <li>Age</li>
              <li>City</li>
              <li>University</li>
            </ul>
          </div>
        </div>
    )
};

export default Profile;