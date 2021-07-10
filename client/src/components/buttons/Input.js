import React from 'react';
import PropTypes from 'prop-types';


const style = {
    borderRadius: '6px',
    border: 'solid silver 1.5px',
    padding: '5px 10px',
    // maxWidth: 'min-content'
    //maxWidth: '200px'
}


const Input = ({text, err, type, value, onChange}) => {
    const isError = err !== ''

    return(
        <label>
            <div style={{maxWidth: 'min-content', margin:'auto'}}>
                <div style={{textAlign:'left'}}>{text}</div>
                <input value={value} onChange={onChange} type={type} 
                style={{...style, borderColor:[isError?'red':'silver']}} />
            </div>
            <div style={{color:'red'}}>{err}</div>
        </label>
    )
}

export const PasswordInput = ({text, err, type, value, onChange, show, setShow}) => (
        <div>
            <Input
                value={value} onChange={onChange} type={show? type:"password"} text={text} err={err}
                style={{...style, borderColor:[true?'red':'silver']}}
            />
            <label style={{display:'block'}}>
                <input type="checkbox" checked={show} onChange={()=>setShow(!show)} />	&nbsp;
                Show Password
            </label>

        </div>
)

export default Input;