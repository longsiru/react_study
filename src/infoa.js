import React, { useState, useEffect} from "react";

const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    //1.
    /* useEffect(() => {
        console.log('overrrr')
        console.log({name, nickname})
    }) */

    //2.
    /* useEffect(() => {
        console.log('overrrr')
        console.log({name, nickname})
    }, []) */

    //3.特定值变更时呼出
    /* useEffect(() => {
        console.log('overrrr')
        console.log({name, nickname})
    }, [name]) *///name变化的时候才会实


    //4.
    useEffect(() => {
        console.log('effect')
        console.log(name)
        
        return () =>{
        console.log('cleanup')
        console.log(name)
        }
    }, [name])


    const onChangeName = (e) => {
        setName(e.target.value)
    } 

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
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