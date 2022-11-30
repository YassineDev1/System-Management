import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {
  return (

      <div className="w-full h-screnn">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter> 
      </div>
  );
}

export default App;
