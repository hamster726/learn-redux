import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions'

const Counter = ({counter, inc, dec, clr}) => {
    return (
        <div className='jumbotron'>
            <div className="counter-block">
                <h1 id="counter">{counter}</h1>
            </div>
            <div className="counter-btns">
                <button id="inc" className="btn btn-inc" onClick={inc}><img src="plus.png"/></button>
                <button id="dec" className="btn btn-dec" onClick={dec}><img src="Minus.png"/></button>
                <button id="clr" className="btn btn-clr" onClick={clr}><img src="Reset.png"/></button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);
