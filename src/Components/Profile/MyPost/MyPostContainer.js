import React from "react";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPost} from "../../../Redux/ProfileReducer";

const MyPostContainer = (props) => {
    return (
        <MyPost
            Posts={props.Posts}
            newPost={props.newPost}
            addPost={props.addPost}/>
    )
}

let mapStateToProps = (state) => {
    return {
        Posts: state.profilePage.Posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost:  (newPost)=> {
            dispatch(addPost(newPost))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostContainer);

