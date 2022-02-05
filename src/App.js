import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/authprovider/AuthProvider';
import Home from './pages/home page/home/Home';
import Services from './pages/services/Services';
import SingleService from './pages/services/single service/SingleService';
import Login from './pages/user and auth/log in/Login';
import PrivateRoute from './pages/user and auth/privateRoute/PrivateRoute';
import Register from './pages/user and auth/register/Register';
import Dashboard from './pages/user menu/dashboard/Dashboard';
import Profile from './pages/user menu/profile/Profile';
import NotFound from './pages/not found/NotFound';
import AddService from './pages/addService/AddService';
import HomeSingleService from './pages/home page/home services/home single service/HomeSingleService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='service' element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            } />
            <Route path='booking/:serviceId' element={
              <PrivateRoute>
                <SingleService />
              </PrivateRoute>
            } />
            <Route path='homeSingleService' element={<HomeSingleService />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='addService' element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            } />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
