import React from 'react'
import * as axios from 'axios';
import profilePhoto from '../../assets/Images/photo.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users", { headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' } })
            .then((response) => {
                this.props.set_users(response.data.items);
            });
    }
    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id}>
                        <div><img src={u.photos.small != null ? u.photos.small : profilePhoto} alt="" /></div>
                        <div>{u.name}</div>
                        <div>status: {u.status}</div>
                        <div>
                            {'u.location.city'}
                            {'u.location.country'}
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.unfollow(u.id)} >Unfollowed</button> : <button onClick={() => this.props.follow(u.id)}>Followed</button>}
                        </div>
                    </div>
                )}
            </div>



        )
    }
}



export default Users;