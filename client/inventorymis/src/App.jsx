import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AssetForm from './components/AssetForm';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addasset' element={<AssetForm />} />
        </Routes>

      </div>
      <Footer />
    </Router>





  );
}

export default App;
