import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Comments from './components/Comments/Comments';
import { getData, getPosts } from './service';
import { Context } from './context/context.js';
import { State, CommentInterface, User, ThreeComments  } from './interfaces';

type userState = State | null
type CommentsState = CommentInterface[] | null



const App = () => {

    const [users, setUsers] = useState<userState>(null);
    const [comments, setComments] = useState<CommentsState>(null);
    const [pickedComments, setPickedComments] = useState<ThreeComments >(null);

  

    function handleClick(id: number) {
        const result = comments
        .filter((item) => item.userId === id)
        .filter((item, index) => index < 3);
        const [username] = users.filter((user: User ) => user.id === id);
        setPickedComments({username: username.name, comments: result});

    }

    useEffect(() => {
        getData().then(result => {
            setUsers(result);
        })
        getPosts().then(res => {
            setComments(res);
        })
    },[])

    return (
        <Context.Provider value={{
            users,
            comments,
            pickComments: handleClick,
            pickedComments
            } } >
            <Header />
            <Slider />
            {pickedComments ? <Comments /> : null}


        </Context.Provider>
       
    )
}
export default App