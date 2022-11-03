import { Component } from "react"
import PropTypes from 'prop-types'

class MyComponent extends Component {
    render () {
        const { name, forNumber, Children} = this.props
        return (
            <div>
                <div>안녕{name} 새로운 컨포넌트 입니다.</div> <br />
                칠드런 값은 {Children}입니다. <br />
                히히{forNumber}입니다.
            </div> 
        )
    }
}














/* //
const MyComponent = ({ name ,forNumber, Children }) => {
    return ( 
        <div>
            <div>안녕{name} 새로운 컨포넌트 입니다.</div> <br />
            칠드런 값은 {Children}입니다. <br />
            히히{forNumber}입니다.
        </div>
    )
}
 */
MyComponent.defaultProps = {
    name : '기본이름'
}

MyComponent.propTypes = {
    name : PropTypes.string,
    forNumber : PropTypes.number
}
export default MyComponent