import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Users/Forms/Login';
import Navbar from './components/Navbar/Navbar';
import CustomerProfile from './components/Users/Profile/CustomerProfile';
import AdminDashboard from "./components/Admin/AdminDashboard";
import AuthRoute from './components/AuthRoute/AuthRoute';
import AdminRoutes from './components/AuthRoute/AdminRoutes';
import RegisterForm from './components/Users/Forms/RegisterForm';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    {/* hide navbar if admin */}
    <Routes>
      {/* nested route */}
      <Route path="admin" element={
        <AdminRoutes>
          <AdminDashboard />
        </AdminRoutes>
      }>
      </Route>
      {/* users */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterForm />} />

      <Route path="/customer-profile" element={<CustomerProfile />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
