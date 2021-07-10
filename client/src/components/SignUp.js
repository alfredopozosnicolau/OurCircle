import React, { useState, useEffect } from 'react';
import {Button, Input, PasswordInput} from './buttons';
import {signUp} from '../api'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';


const container = {
    display: 'inline-grid',
    gridGap: '14px',
    padding: '20px',
    background: 'white',
    margin: '10px auto',
    width: 'fit-content',
    boxShadow:' 0 0 9px #00000099',
    borderRadius: '8px'
}


export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password){
    if(password.length < 8){
        return 'Your password must be atleast 8 characters long.'
    }
    if(!/\d/.test(password)){
        return 'Your password must include atleast one number.'
    }
    if(!/[a-zA-Z]/.test(password)){
        return 'Your password must include atleast one letter.'
    }
    if(!/(?=.*[!@#$%^&*])/.test(password)){
        return 'Your password must include a special character.'
    }
    return ''
}

const SignUp = ({user}) => {
    // misc
    const [showPassword, setShowPassword] = useState(false)
    let history = useHistory();
    //Input values
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // Error Values
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setlastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    useEffect(()=>{
        if(user){
            alert('You are logged in')
            history.replace('/')
        }
    }, [])

    const handleSubmit = () => {
        let correct = true;
        if (firstName.length < 1){
            correct = false
            setFirstNameError('Please enter your first name')
        }else{
            setFirstNameError('')
        }
        if (lastName.length < 1){
            correct = false
            setlastNameError('Please enter your last name')
        }else{
            setlastNameError('')
        }
        if (!isValidEmail(email)){
            correct = false
            setEmailError('Please enter a valid e-mail')
        }else{
            setEmailError('')
        }
        const validatedPassword = validatePassword(password)
        if (validatedPassword !== ''){
            correct = false
        }
        setPasswordError(validatedPassword)

        if(password !== confirmPassword){
            correct = false
            setConfirmPasswordError('The passwords entered do not match.')
        }else{
            setConfirmPasswordError('')
        }

        if(correct){
            signUp({
                email,
                firstName,
                lastName,
                password
            })
            .then(resp=>{
                if(resp.data.success){
                    alert('Your account was successfully created! Please log in.')
                    history.push("/signin");
                }else{
                    alert('There was an error with your request')
                }
            })
            .catch(err=>{
                Object.keys(err.response.data.message.keyValue).forEach(key=>{
                    switch(key){
                        case "email":
                            setEmailError('The email has been taken')
                            break
                        case "firstName":
                            setEmailError('There was an error with your First Name')
                            break
                        case "lastName":
                            setEmailError('There was an error with your last name')
                            break
                        case "password":
                            setEmailError('There was an error with your password')
                            break
                    }
                })
            })
        }else{
            alert('There is an error with your fields.')
        }
    }
    return(
        <>
        <h4 style={{fontWeight:'600', marginBottom:'20px'}}>
            Sign Up
        </h4>
        <form onSubmit={e=>{
            e.preventDefault()
            handleSubmit()
            }} style={container}>
            <Input onChange={e=>setFirstName(e.target.value)} err={firstNameError} value={firstName} text="First Name" />
            <Input onChange={e=>setlastName(e.target.value)} err={lastNameError} value={lastName} text="Last Name" />
            <Input onChange={e=>setEmail(e.target.value)} err={emailError} value={email} text="E-mail" />
            <PasswordInput onChange={e=>setPassword(e.target.value)} err={passwordError} value={password} type={showPassword?"text":"password"} text="Password"
            show={showPassword} setShow={setShowPassword} />
            <Input onChange={e=>setConfirmPassword(e.target.value)} err={confirmPasswordError} value={confirmPassword} type={showPassword?"text":"password"} text="Confirm Password" />
            <Button type="submit" text='Sign Up' />
        </form>
        </>
    )
}

const mapStateToProps = state=>{
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(SignUp)