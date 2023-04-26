import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Pages/Routes/Route/Route';

function App() {
  
  return (
    <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
