import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Pages/Routes/Route/Route';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './Theme/Theme';
import { Box } from '@mui/material';

function App() {

  return (
    <Box>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={route}></RouterProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
