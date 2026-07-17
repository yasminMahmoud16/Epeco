
import { createHashRouter, RouterProvider } from 'react-router';
import './App.css'
import RouterLayout from './Layout/RouterLayout.jsx';


// pages 
import Home from './Pages/Home.jsx';

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />, children: [
      {index:true, element: <Home/>},
    ]
  },
]);

function App() {

  return <>
    <RouterProvider router={router} />
  </>
    
  

    
  
}

export default App
