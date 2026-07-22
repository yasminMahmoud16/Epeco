
import { createHashRouter, RouterProvider } from 'react-router';
import './App.css'
import RouterLayout from './Layout/RouterLayout.jsx';


// pages 
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Audience from './Pages/Audience/Audience.jsx';
import ServicesWithId from './Pages/Services/ServicesWithId.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Clients from './Pages/Clients/Clients.jsx';
import Certification from './Pages/Certification/Certification.jsx';
import ClientsDetails from './Pages/Clients/ClientsDetails.jsx';

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      // { path: "عن-المكتب", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServicesWithId /> },
      // { path: "مجالات-العمل", element: <Services /> },
      { path: "audience", element: <Audience /> },
      // { path: "الجمهور-المستهدف", element: <Audience /> },
      { path: "contact", element: <Contact /> },
      // { path: "تواصل-معنا", element: <Contact /> },
      { path: "clients", element: <Clients /> },
      // { path: "عملاؤنا", element: <Clients /> },
      { path: "clients/clients-Details", element: <ClientsDetails /> },
      // { path: "عملاؤنا/تفاصيل-العملاء", element: <ClientsDetails /> },
      { path: "certifications", element: <Certification /> },
      // { path: "إعتماداتنا", element: <Certification /> },
    ],
  },
]);

function App() {

  return <>
    <RouterProvider router={router} />
  </>
    
  

    
  
}

export default App
