import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Copyright } from '../components/Copyright';
import { NavDrawer } from '../components/NavDrawer';
import { SignInModal } from '../components/SignInModal';
import { TopAppBar } from '../components/TopAppBar/TopAppBar';
import { WelcomeContent } from '../components/WelcomeContent';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

//TODO: add more specifics
const lightTheme = createTheme({
  palette: {
    mode: THEME.LIGHT,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: THEME.DARK,
  },
});

export const WelcomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [theme, setTheme] = useState(THEME.LIGHT);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  const onSignIn = () => {
    setLoggedIn(true);
    setShowLoginModal(false);
  };

  const onLogoutClick = () => {
    setLoggedIn(false);
  };

  const handleDrawerClick = () => {
    setShowNavDrawer((isOpen) => !isOpen);
  };

  const handleNavDrawerClose = () => {
    setShowNavDrawer(false);
  };

  const onThemeChange = () => {
    setTheme((theme: THEME) => {
      switch (theme) {
        case THEME.LIGHT:
          return THEME.DARK;
        case THEME.DARK:
          return THEME.LIGHT;
      }
    });
  };

  const getTheme = () => {
    switch (theme) {
      case THEME.LIGHT:
        return lightTheme;
      case THEME.DARK:
        return darkTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <Container maxWidth="xl">
        <TopAppBar
          loggedIn={loggedIn}
          onLoginClick={handleLoginClick}
          onLogoutClick={onLogoutClick}
          onDrawerTriggerClick={handleDrawerClick}
          theme={theme}
          onThemeButtonClick={onThemeChange}
        />
        <NavDrawer open={showNavDrawer} onClose={handleNavDrawerClose} />
        <SignInModal open={showLoginModal} onClose={handleLoginClose} onSignIn={onSignIn} />
        <WelcomeContent />
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
