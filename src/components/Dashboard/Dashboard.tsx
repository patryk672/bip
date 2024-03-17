'use client';

import * as React from 'react';
import { useEffect } from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import clsx from 'clsx';

import MainFooter from '@/components/Footer';
import { darkTheme, defaultTheme } from '@/lib/theme';
import type { ChildrenProps } from '@/types';

import ListItems from './ListItems';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard({ children }: ChildrenProps) {
  const [open, setOpen] = React.useState(true);
  const [theme, setTheme] = React.useState(defaultTheme);
  const [fontSize, setFontSize] = React.useState(16);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const isDarkMode = theme.palette.mode === 'dark';
  const mainContentClass = isDarkMode ? 'theme-dark' : 'theme-light';

  const handleSwitchTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : defaultTheme);
    window.location.hash = theme.palette.mode === 'light' ? 'dark' : 'light';
  };

  useEffect(() => {
    const handleHashChange = () => {
      const themeMode = window.location.hash.substring(1);
      if (themeMode === 'light' || themeMode === 'dark') {
        setTheme(themeMode === 'light' ? defaultTheme : darkTheme);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleFontSize = (size: number) => {
    const root = document.querySelector('html');
    if (root) {
      root.style.fontSize = `${size}px`;
      setFontSize(size);
    }
  };

  const fontSizeClasses = (size: number) =>
    clsx(
      fontSize === size && 'text-white bg-black pointer-events-none',
      'flex px-4 item-center text-primary rounded-none hover:bg-blue-100 h-[64px]'
    );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {' '}
              <Link href="/">BIP</Link>
            </Typography>
            <div className="bg-white flex items-center">
              <IconButton
                className="h-[64px] text-sm px-4 flex gap-2 item-center rounded-none hover:bg-blue-100"
                onClick={() => {
                  handleSwitchTheme();
                }}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <title>contrast</title>
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM4 16c0-6.627 5.373-12 12-12v24c-6.627 0-12-5.373-12-12z" />
                </svg>

                <span className="block text-primary">
                  {isDarkMode ? 'Normalny kontrast' : 'Większy kontrast'}
                </span>
              </IconButton>
            </div>
            <div className="h-[64px] bg-white flex items-center justify-center pr-4">
              <IconButton
                tabIndex={fontSize === 16 ? -1 : 0}
                className={fontSizeClasses(16)}
                onClick={() => {
                  handleFontSize(16);
                }}
              >
                <span className="block" style={{ fontSize: `${20}px` }}>
                  A
                </span>
              </IconButton>
              <IconButton
                tabIndex={fontSize === 20 ? -1 : 0}
                className={fontSizeClasses(20)}
                onClick={() => {
                  handleFontSize(20);
                }}
              >
                <span className="block text-lg" style={{ fontSize: `${26}px` }}>
                  A
                </span>
              </IconButton>
              <IconButton
                tabIndex={fontSize === 24 ? -1 : 0}
                className={fontSizeClasses(24)}
                onClick={() => {
                  handleFontSize(24);
                }}
              >
                <span className="block text-xl" style={{ fontSize: `${30}px` }}>
                  A
                </span>
              </IconButton>
              <span className="text-primary text-sm px-1">Rozmiar tekstu</span>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
          }}
          className={mainContentClass}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {children}
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <MainFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
