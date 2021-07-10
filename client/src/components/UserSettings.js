import {connect} from 'react-redux'
import React, {useState} from 'react';
import { Button, Input, PasswordInput } from './buttons'
import {logUserOut} from '../actions/userAuthentication'
import { useHistory } from 'react-router';


const styles ={
    container:{
        display: 'flex',
        flexDirection:'column'
    }
}



const ChangePassword = () => {
    return(
        <div style={styles.container}>
            <Input err='' text="Old Password" />
            <Input err='' text="New Password" />
            <Input err='' text="Confirm New Password"/>
            <Button text="Submit
            " />
        </div>
    )
}

const UserSettings = ({user, logUserOut}) => {
    let history = useHistory()

    const handleLogOut = () => {
        logUserOut()
        //alert('You are now logged out')
        //history.push('/')
    }

    if(!user){
        history.push('/')
    }

    return (
        <div>
            <ChangePassword />
            <Button onClick={handleLogOut} text='Log Out' />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logUserOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)