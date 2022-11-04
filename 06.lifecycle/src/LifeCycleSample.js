import React, { Component } from 'react'

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null;
    constructor(props) {
        super(props);
        console.log('constructor');

    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps..');
        console.log(nextProps);
        console.log(prevState);
        if (nextProps.color !== prevState.color){
            return {color: nextProps.color };
        }
        return null;
    }



    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdatender')
        console.log(nextProps)
        console.log(nextState)

        return nextState.number % 10 !== 4;
    }

    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('getSnapshotBeforeUpdate')
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null
    }


    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate..')
        if (snapshot) {
            console.log('업데이트 되기전 색상:', snapshot)
        }
    }


    render(){
        console.log('render');

        const style = {
            color: this.props.color,
        };

        return (
            <div>
                <h1 style={style} ref={(ref)=> (this.myRef = ref)}>{this}</h1>
            </div>
        )
    }


}

export default LifeCycleSample;