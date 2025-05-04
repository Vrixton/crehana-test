import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/country/:code" element={ <CountryDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;