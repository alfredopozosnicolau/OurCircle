import React, {useState, useEffect} from 'react'
import {Button, Input, PasswordInput} from './buttons';
import {isValidEmail} from './SignUp'
import {connect} from 'react-redux'
import {logUserIn} from '../actions/userAuthentication'
import { useHistory } from 'react-router';

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

const SignIn = ({logUserIn, user}) => {
    //misc
    let history = useHistory()
    // Log in values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //Local errors
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = () => {
        let correct = true
        if (!isValidEmail(email)){
            correct = false
            setEmailError('Please enter a valid email')
        }else{
            setEmailError('')
        }
        if (password.length < 1){
            correct = false
            setPasswordError('Please enter a password')
        }else{
            setPasswordError('')
        }


        if(correct){
            logUserIn(email, password)
        }else{
            alert('Check your fields')
        }
    }

    if(user){
        alert('You are logged in')
        history.replace('/')
    }
    return (
        <>
        <h4 style={{fontWeight:'600', marginBottom:'20px'}}>
            Sign In
        </h4>
        <form onSubmit={e=>{
            e.preventDefault()
            handleSubmit()
            }} style={container}>
            <Input onChange={e=>setEmail(e.target.value)} value={email} err={emailError} text="E-mail" />
            <PasswordInput onChange={e=>setPassword(e.target.value)} err={passwordError} setShow={setShowPassword} 
            show={showPassword} value={password} text="Password"
            />
            <Button type="submit" text='Log In' />
        </form>
        <div style={{color:'red'}}>
            {error}
        </div>
        </>
    )
}

const mapStateToProps = state=>{
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    logUserIn
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)