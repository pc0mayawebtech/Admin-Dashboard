import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import ContentContainer from './Component/ContentContainer/ContentContainer'
import Login from './Component/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Login2 from './Component/Login2/Login2';
import ForgotPassword from './Component/ForgotPassword/ForgotPassword';
import AccessDenied from './Component/AccessDenied/AccessDenied';

function App() {
  

  return (
    <>  
    <Router>
      <Routes>
        <Route path='/'  element={<Login />} />
        <Route path='/forgot' element={ <ForgotPassword />} />
        <Route path='/access-denied' element={ <AccessDenied />} />
        <Route path='/dashboard' element={<><Header /> <ContentContainer /> </>} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
