import {login} from '../api';
import {LOG_IN, LOG_OUT} from './actionTypes'

export const logUserIn = (email, password)=>(
    dispatch=>{
        login({email, password})
            .then(resp=>{
                if(resp.data.sucess !== false){
                    const {user, role, token} = resp.data
                   dispatch({
                       type:LOG_IN,
                       user: {user:user.userInfo,
                       role,
                       token}
                   }) 
                }
            })
            .catch(err=>{
                const error = err.response?.data?.error
                alert(error !== undefined?error:'Not connected')
                dispatch({
                    type:LOG_OUT
                })
            })
    }
)

export const logUserOut = () =>(
    dispatch=>(
        dispatch({
            type:LOG_OUT
        })
    )
)
