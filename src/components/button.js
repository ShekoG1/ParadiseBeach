import React from 'react';
import "./styles/button.css";
import { Link } from 'react-router-dom';

// Declarations
const STYLES = ['btn-primary','btn-outline'];
const SIZES = ['btn-small','btn-medium','btn-large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonsize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/Book' className='btn-mobile'>
            <button className={`btn ${checkButtonstyle} ${checkButtonsize}`} onClick={onclick} type={type}>{children}</button>
        </Link>
    );

}