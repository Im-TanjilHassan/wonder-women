import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/authprovider/AuthProvider';
import Home from './pages/home page/home/Home';
import Services from './pages/services/Services';
import SingleService from './pages/services/single service/SingleService';
import Login from './pages/user and auth/log in/Login';
import Register from './pages/user and auth/register/Register';
import Dashboard from './pages/user menu/dashboard/Dashboard';
import Profile from './pages/user menu/profile/Profile';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='service' element={<Services />} />
            <Route path='booking/:serviceId' element={<SingleService />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
