import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import React from 'react';
import { Children } from 'react';
import useStyles from '../utils/styles';
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved @Amazon</Typography>
      </footer>
    </div>
  );
}
