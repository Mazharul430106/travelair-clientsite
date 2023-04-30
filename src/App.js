import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Pages/Routes/Route/Route';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './Theme/Theme';

function App() {

  return (
    <div className="">
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={route}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
