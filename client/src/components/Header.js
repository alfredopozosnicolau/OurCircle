import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import {Link} from 'react-router-dom';


const SignUpButton = () => {}


const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper:{
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '1rem',
  },
  colorText:{
    color:'#5AFF3D',
  },
  container:{
    textAlign: 'center',
  },
  title:{
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown:{
    color:'#5AFF3D',
    fontSize: '3em',
  }
}));


const logInButtonStyle = {
  color:'white',
  border: 'solid 2px #5aff3d',
  background: 'transparent',
  borderRadius:'6px'
}

const signInButtonStyle = {
  //color:'white',
  border: 'none',
  background: 'transparent',
  borderRadius:'6px'
}
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])
  return (
  <div className={classes.root} id="header">
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
    <div className={classes.container}>
      <h1 className={classes.title}>
        Welcome to <br/> Our 
      <span className={classes.colorText}>Circle</span>
      </h1>
      <Scroll to='weekly-spotlight'>
      <IconButton>
        <ExpandMoreIcon className={classes.goDown}/>
      </IconButton>
      </Scroll>
    </div>
    </Collapse>
  </div>
  );
}