import React from 'react';
import {Button, createTheme, CssBaseline, ThemeProvider} from '@mui/material';

function App() {
  // https://mui.com/material-ui/customization/default-theme/
  let theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({theme}) => ({
            color: 'rgba(0,0,255,1)'
          })
        }
      }
    },
    palette: {
      // mode: 'dark',
      primary: {
        main: 'rgba(0,0,0,1)'
      },
      text: {
        primary: 'rgba(0,255,0,1)'
      },
      background: {
        default: 'rgba(255,0,0,1)'
      }
    },
    typography: {
      fontSize: 24,
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Button variant={'contained'}
              color={'primary'}
              sx={{color: 'rgba(255,255,255,1)'}}>
        Hello MUI!
      </Button>
    </ThemeProvider>
  );
}

export default App;
