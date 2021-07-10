import React from 'react';


const buttonStyle = {
    padding: '6px 28px',
    background: '#203354',
    color: 'white',
    borderRadius: '6px',
    border: 'solid white'
}
export const Button = ({text, styles, onClick, value, type}) => (
        <button onClick={onClick} type={type} value={value} style={{...buttonStyle}}>
            {text}
        </button>
)

const altButtonStyle = {
    padding: '6px 28px',
    background: 'white',
    color: '#203354',
    borderRadius: '6px',
    border: 'solid #203354'
}
export const AltButton = ({text, styles, onClick, value, type}) => (
    <button type={type} value={value} style={{...altButtonStyle}}>
        {text}
    </button>
)