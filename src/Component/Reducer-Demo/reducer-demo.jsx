import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useReducer } from "react";
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
let initialState ={likesCount:0}

function reducer(state,action)
{

    switch(action.type){
        case 'addLike':
            return {likesCount:state.likesCount+1}
            case 'addDisLike':
                return {likesCount:state.likesCount-1}
    }
}

export function ReducerDemo() {

    const[state,dispatch] =useReducer(reducer,initialState);
    const[cookies,setcookie,removecookie] = useCookies(['username'])

    useEffect(() => {
        console.log(cookies);
    },[])
function HandleLikeClick(){
    dispatch({type:'addLike'});
}

function HandleSignOut(){
    removecookie('username');
}
return(
    <div className="container-fluid">
<h2>Welcome: {cookies['username']} SignIN<button onClick={HandleSignOut}>SignOut</button></h2>
 <iframe height="300"width="400" src="https://youtube.com/embed/_mhtfJQ5lxU"></iframe>

<div>
    <button onClick={HandleLikeClick}  className="btn btn-primary bi bi-hand-thumbs-up">Like</button> <span> {state.likesCount} Likes</span> 
</div>
    </div>
)
}