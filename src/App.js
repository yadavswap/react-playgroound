import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Users/Forms/Login';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    {/* hide navbar if admin */}
    <Routes>
  
      {/* users */}
      <Route path="/login" element={<Login />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
