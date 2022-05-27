import { ThemeProvider } from '@emotion/react';
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Handmade By Design` : 'Handmade By Design'}
        </title>
        {description && <meta name="description" content={description} />}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>Handmade By Design</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer">
          <Typography sx={classes.footer}>
            All rights reserved. Handmade by Design &#169; 2022
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
