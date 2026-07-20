
import { createHashRouter, RouterProvider } from 'react-router';
import './App.css'
import RouterLayout from './Layout/RouterLayout.jsx';


// pages 
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Audience from './Pages/Audience/Audience.jsx';
import ServicesWithId from './Pages/Services/ServicesWithId.jsx';

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "عن-المكتب", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServicesWithId /> },
      { path: "مجالات-العمل", element: <Services /> },
      { path: "audience", element: <Audience /> },
      { path: "الجمهور-المستهدف", element: <Audience /> },
    ],
  },
]);

function App() {

  return <>
    <RouterProvider router={router} />
  </>
    
  

    
  
}

export default App
