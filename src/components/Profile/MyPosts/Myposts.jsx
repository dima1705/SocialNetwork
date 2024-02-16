import React from "react";
import c from './Myposts.module.css';
import Post from "./Posts/Post";

const Myposts = () => {
    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

                <div className={c.posts}>
                    <Post message='Hi, how are you' />
                    <Post message='My first post' />

                </div>
            </div>
        </div>
    )
}

export default Myposts