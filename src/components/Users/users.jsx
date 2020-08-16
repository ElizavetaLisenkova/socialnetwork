import React from 'react'

import gen_dic from './users.module.css'
import profilePhoto from '../../assets/Images/photo.jpg'
import { NavLink } from 'react-router-dom'



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let btnPages = []
    for (let i = 1; i <= pagesCount; i++) {
        btnPages.push(i)
    }
    return (
        <div>
            {props.isLoading && <div>Loading IMG will be here</div>}
            {btnPages.map(p => {
                return (<button className={props.currentPage === p && gen_dic.currentPage} onClick={() => props.changePage(p)}>{p}</button>)
            })}

            {props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <NavLink to={`profile/${u.id}`}><img src={u.photos.small != null ? u.photos.small : profilePhoto} alt="" /></NavLink>
                    </div>
                    <div>{u.name}</div>
                    <div>status: {u.status}</div>
                    <div>
                        {'u.location.city'}
                        {'u.location.country'}
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)} >Unfollowed</button> : <button onClick={() => props.follow(u.id)}>Followed</button>}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Users;