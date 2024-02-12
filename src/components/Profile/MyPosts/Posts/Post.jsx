import React from "react";
import c from './Post.module.css';

const Post = (props) => {


    return (
        <div className={c.item}>
            <img src="https://images.indianexpress.com/2022/04/GettyImages-men-health-1200.jpg?w=414" />
            {props.message}
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post