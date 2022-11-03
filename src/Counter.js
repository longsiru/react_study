import { Component } from "react";


class Counter extends Component {
    constructor(props){
        super(props)  //constructor사용시 반드시 선언.component의 생성자 함수를 호출해줌
        this.state = {
            number : 0,
            number2 : 0,
            fixedNumber: 0
        }
    }


    render() {
        const { number, number2, fixedNumber } = this.state
        // const number = 1;
        return (
            <div>
                <h1>{ number }</h1>
                <h2>고정{ fixedNumber }</h2>
                <button onClick={()=>{
                    this.setState({
                        number: number + 1
                    }, ()=>{
                        console.log('방근 state가 호출되었습니다')
                        console.log(this.state)
                    })
                    /* this.setState((prevState) => {
                        return{
                           number: number + 1 
                        } 
                    }) */
                }}>+1</button>
                <h1>{ number }</h1>
                <button onClick={()=>{
                    this.setState({ number2: number2 - 1})
                }}>-1</button>
            </div>
        )
    }
}

export default Counter;