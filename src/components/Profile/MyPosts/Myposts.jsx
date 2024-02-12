import React from "react";
import c from './Myposts.module.css';
import Post from "./Posts/Post";

const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                New post
                <div className={c.posts}>
                    <Post message='Hi, how are you'/>
                    <Post message='My first post'/>

                </div>
            </div>
        </div>
    )
}

export default Myposts