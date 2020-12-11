import profileReducer, {addPost, deletePost} from "./ProfileReducer";

let state =
    {
        Posts: [
            {id: 1, message: 'Hi ladies', likesCount: 17},
            {id: 2, message: 'Hi nigga', likesCount: 27},
            {id: 3, message: 'Hi all', likesCount: 67}
        ]
    }


    it('new post should be added', () => {
        //1.test data
        let action = addPost('technology')

        //2.action
        let newState = profileReducer(state, action)


        //3.expectation
        expect (newState.Posts.length).toBe(4);

    })

it('message of new post should be correct', () => {
    //1.test data
    let action = addPost('technology')

    //2.action
    let newState = profileReducer(state, action)


    //3.expectation
    expect (newState.Posts[3].message).toBe('technology');

})

it('delete post', () => {
    //1.test data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action)


    //3.expectation
    expect (newState.Posts.length).toBe(2);

})


it('if id incorrect post will not be deleted', () => {
    //1.test data
    let action = deletePost(777)

    //2.action
    let newState = profileReducer(state, action)


    //3.expectation
    expect (newState.Posts.length).toBe(3);

})