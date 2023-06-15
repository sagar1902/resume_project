import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import { ResumeProvider } from './context';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Main from './components/Builder/Main';

import Login from './components/User/Login';
import Register from './components/User/Register';
// import PrivateRoute from './Routes/PrivateRoutes';

import TemplateSelection from './components/TemplateSelection'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    // wrap component in PrivateRoute
    <ResumeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='templates' element={<TemplateSelection/>} />
        <Route path='builder/:templateName' element={<Main />} />
      </Routes>
      <Footer />
    </ResumeProvider>
  )
}

export default App
