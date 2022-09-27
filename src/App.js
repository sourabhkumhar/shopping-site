import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductLists from './components/ProductLists/ProductLists';
import ProdState from './context/products/ProdState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Success from './components/Success/Success';

function App() {
  return (
    <ProdState>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductLists />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>

      </Router>
    </ProdState>
  );
}

export default App;
