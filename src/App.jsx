import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App