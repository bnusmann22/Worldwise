import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Product" element={<Product />} />
        <Route path="Login" element={<Login />} />
        <Route path="App" element={<AppLayout />}>
          <Route path='cities' element={<p>List of cities</p>} />
          <Route path='countries' element={<p>countries</p>} />
          <Route path='form' element={<p>form</p>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App