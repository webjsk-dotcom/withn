import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import WithMain from "./pages/WithMain";
import About from "./pages/About";
import Brand from "./pages/Brand";
import Product from "./pages/Product";
import Data from "./pages/Data";



export default function App() {
  return (
    <div className="wrap">      
      <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<WithMain />} />
            <Route path="/about" element={<About />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product" element={<Product />} />
            <Route path="/data" element={<Data />} />
            {/* 필요하면 계속 추가 */}
          </Routes>
        </main>
      <Footer />
    </div>
    //전체감싸는div
  )
}



