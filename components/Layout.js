import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import React from 'react';
import { Children } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved @Amazon</Typography>
      </footer>
    </div>
  );
}
