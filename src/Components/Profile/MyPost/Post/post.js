import React from "react";
import s from './post.module.css';


const Post = (props) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.post}>
                <img alt={'1'} src='https://data.whicdn.com/images/313727500/original.jpg'/>
            </div>
            <div className={s.postText}>
                {props.message} {''}
                <span><button>like {props.likesCount}</button></span>
            </div>

        </div>
    )
}

export default Post;