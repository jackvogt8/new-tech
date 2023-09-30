import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import { THEME } from '../../pages/WelcomePage';
import { DarkMode, LightMode } from '@mui/icons-material';

interface TopAppBarProps {
  loggedIn: boolean;
  theme: THEME;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onDrawerTriggerClick: () => void;
  onThemeButtonClick: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  loggedIn,
  theme,
  onLoginClick,
  onLogoutClick,
  onDrawerTriggerClick,
  onThemeButtonClick,
}: TopAppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onDrawerTriggerClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
              The Vogt Show
            </Typography>
            {/* <AppBarSearch /> */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Toggle theme"
              onClick={onThemeButtonClick}
            >
              {theme === THEME.DARK && <LightMode />}
              {theme === THEME.LIGHT && <DarkMode />}
            </IconButton>
            {!loggedIn && (
              <Button color="inherit" onClick={onLoginClick}>
                Login
              </Button>
            )}
            {loggedIn && (
              <Button color="inherit" onClick={onLogoutClick}>
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
