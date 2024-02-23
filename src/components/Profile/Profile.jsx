import React from "react";

// import c from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    // debugger
    return (
        <div >
            <ProfileInfo/>
            <Myposts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile