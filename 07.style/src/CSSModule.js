import React, { Component } from 'react';
import styles from './CSSModule.module.css'
class CSSModule extends Component {
    render() {
        return (
          <div className={styles.wrapper}>
             안녕하세요, 저는 <span className="something">CSS Module!</span>
          </div>
        );
    }
}

export default CSSModule;
