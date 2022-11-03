import React, { useState, useReducer} from "react";



function reducer(state, action){
    return {
        ...state,
        [action.name]: action,value,
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name:'',
        nickname:''
    });

    const {name, nickname} = state;

   

    const onChange = (e) => {
        dispatch(e.target.value)
    } 

    
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <b>이틈:</b> 
                {name}
            </div>
            <div>
                <b>niname:</b> 
                {nickname}
            </div>
        </div>
        
)
}

export default Info;