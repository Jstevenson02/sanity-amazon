import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  CssBaseline,
  Link,
  Typography,
  Toolbar,
  Box,
  Container,
  Switch,
  Badge,
} from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
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
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Handmade By Design` : 'Handmade By Design'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <NextLink href="/" passHref>
                <Link>
                  <Typography sx={classes.brand}>Handmade By Design</Typography>
                </Link>
              </NextLink>
            </Box>
            <Box>
              <Switch checked={darkMode} onChange={darkModeChangeHandler} />
              <NextLink href="/cart" passHref>
                <Typography component="span">
                  {cart.cartItems.length > 0 ? (
                    <Badge color="warning" badgeContent={cart.cartItems.length}>
                      <ShoppingCartIcon />
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Typography>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>
            Copyright © 2022 All rights reserved. Handmade By Design
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
