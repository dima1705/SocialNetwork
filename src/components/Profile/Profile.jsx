import React from "react";

// import c from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div>
            <img src='https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-colorful-gradient-lighting-effect-e-commerce-promotion-banner-background-image_929719.jpg' />
            <div>
                ava + desc
            </div>
            <Myposts/>
        </div>
    )
}

export default Profile