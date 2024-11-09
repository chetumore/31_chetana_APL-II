import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, IconButton, Paper } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#f0f0f0',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '16px',
            margin: '16px 0',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '16px',
            margin: '16px 0',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.5)',
          },
        },
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {darkMode ? 'Dark Mode' : 'Light Mode'} Application
          </Typography>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 20 }}>
        <Paper>
          <Typography variant="h4" gutterBottom>
            {darkMode ? 'Dark Mode' : 'Light Mode'} is {darkMode ? 'Enabled' : 'Disabled'}
          </Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
            Secondary Button
          </Button>
        </Paper>
        <Paper>
          <Typography variant="h5">
            This is another Paper component styled differently in {darkMode ? 'Dark Mode' : 'Light Mode'}.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
