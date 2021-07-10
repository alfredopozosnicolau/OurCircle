import React, { Component } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { Link as Scroll } from 'react-scroll';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: '#595959',
    position: 'sticky',
    marginBottom: '25px',
    fontFamily: 'Nunito'

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

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} evelation={0}>
            <Toolbar className={classes.appbarWrapper}>
              
                 <h1 className={classes.appbarTitle} ><Link style={{color:'white'}} to="/">
                  Our<span className={classes.colorText}>Circle</span></Link>
                  </h1>
              
               
                <h3 className={classes.appbarTitle}>
                About<span className={classes.colorText}>Us</span>
                </h3>
                <h3 className={classes.appbarTitle}><Link style={{color:'white'}} to="/businesses">
                Explore<span className={classes.colorText}>More</span>
                </Link></h3>
                <h3 className={classes.appbarTitle}><Link to="/signin">
                <button style={logInButtonStyle}>Login</button></Link>
                <Link to="/signup"><button style={signInButtonStyle} className={classes.colorText}>SignUp</button></Link>

                </h3>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
