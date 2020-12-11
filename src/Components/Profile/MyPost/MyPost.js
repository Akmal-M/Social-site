import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators";
import {Textarea} from "../../../Utils/FormsControls/FormControl";


const MyPost = React.memo((props) => {
    console.log('Render')
        const PostData = [...props.Posts].reverse().map
        (e => <Post message={e.message} likesCount={e.likesCount} key={e.id}/>)


        const addPost = (values) => {
            props.addPost(values.newPost);
        }


        return (
            <div>
                <MyPostReduxForm onSubmit={addPost}/>
                <div>
                    {PostData}
                </div>
            </div>

        )
    }
)

const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props) => {
    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newPost'
                   placeholder={'ur post here'}
                   validate={[required, maxLength50]}/>
            <button>Add post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)

export default MyPost;