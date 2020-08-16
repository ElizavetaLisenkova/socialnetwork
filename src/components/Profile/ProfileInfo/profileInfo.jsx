import React from 'react';
import gen_dic from './profileInfo.module.css'

const Profile= (props) => {
  if (!props.profile) {
    return (
      <div>I am loading</div>
    )
  }
    return(
        <div className={gen_dic.profile}>
         <div className={gen_dic.me}>
          <div>
              <img className={gen_dic.avatar} src={props.profile.photos.large} alt=""/>
            </div>
            <div className={gen_dic.name}>
                {props.profile.fullName}
            </div>
         </div>
          <div className={gen_dic.description}>
            {props.profile.aboutMe}
          </div>
          <div><h3>Контакты:</h3>
      <ul>
        <li>{props.profile.contacts.vk}</li>
        <li>{props.profile.contacts.facebook}</li>
        <li>{props.profile.contacts.twitter}</li>
        <li>{props.profile.contacts.instagram}</li>
        <li>{props.profile.contacts.github}</li>
      </ul>
      </div>

        </div>
    )
};

export default Profile;