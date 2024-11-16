import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EachProduct from "./pages/EachProduct";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<EachProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
