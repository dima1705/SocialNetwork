import React from "react";
import c from './Myposts.module.css';
import Post from "./Posts/Post";

const Myposts = (props) => {

    let postsEl = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={c.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div className={c.newPostBlock}>
                    <div>
                        <textarea placeholder="Type something in...">
                            {/* <input  /> */}
                        </textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={c.posts}>
                    {postsEl}
                </div>
            </div>
        </div>
    )
}

export default Myposts