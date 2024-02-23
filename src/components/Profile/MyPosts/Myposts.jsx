import React from "react";
import c from './Myposts.module.css';
import Post from "./Posts/Post";

const Myposts = (props) => {

    let postsEl = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostEl = React.createRef()

    let addPost = () => {
        let text = newPostEl.current.value;
        props.addPost(text)
        newPostEl.current.value = ''
    }


    return (
        <div className={c.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div className={c.newPostBlock}>
                    <div>
                        <textarea placeholder="Type something in..." ref={newPostEl}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
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