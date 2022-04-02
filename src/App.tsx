import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Comments from './components/Comments/Comments';
import { getData, getPosts } from './service';
import { Context } from './context/context';

const App = () => {

    const [users, setUsers] = useState(null);
    const [comments, setComments] = useState(null);
    const [pickedComments, setPickedComments] = useState(null)

    function handleClick(id) {
        const result = comments
        .filter((item) => item.userId === id)
        .filter((item, index) => index < 3);
        const [username] = users.filter((user) => user.id === id);
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
            <Comments />


        </Context.Provider>
       
    )
}
export default App