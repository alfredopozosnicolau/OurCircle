import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import CheckOutLocal from './CheckOutLocal';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: 'cover',
    top: '0',
    position: 'absolute',
    width: '100%'
  },

}));
export default function App() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <CssBaseline />
    <Header />
    <CheckOutLocal />
  </div>
  );
}