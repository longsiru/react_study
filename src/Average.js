import React, { useState, useMemo, useCallback} from 'react'

const getAverage = (numbers) => {
    console.log("계산중...");

    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    })
    
    //concat追加值
    const onInsert = useCallback((e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number, list]);

    const avg = useMemo (() => getAverage(list), [list]);

    return (
        <div>
           <input value={number} onChange={onChange}></input>
           <button onClick={onInsert}>login</button>
           <ul>
               {list.map((value, index)=> (
                   <li key={index}>{value}</li>
               ))}
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
            </div>
       </div>
  )
}



export default Average;