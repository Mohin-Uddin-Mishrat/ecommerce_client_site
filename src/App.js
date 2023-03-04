import './App.css';
import { useForm } from 'react-hook-form';
import { RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Router } from './Routs/Routs';


function App() {
 return(
  <div>
     <RouterProvider router={Router}></RouterProvider>
  </div>
 )
}

export default App;
