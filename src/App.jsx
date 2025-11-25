import { Routes, Route } from 'react-router-dom';
import Products from './page/Products';
import Blog from './page/Blog';
import FAQ from './page/FAQ';
import Contact from './page/Contact';
import Layout from './layout/Layout';
import Home from './page/Home';
import PhonesDetail from './components/PhonesDetail';
import Phones from './components/Phones';
import FourCard from './components/FourCard';
import FourCardDetail from './components/FourCardDetail';
import CategoriesDetail from './components/CategoriesDetail';
import AllDetail from './components/AllDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/fourprod" element={<FourCard />} />
        <Route path="/fourprod/:id" element={<FourCardDetail />} />
        <Route path="/categories/:id" element={<CategoriesDetail />} />
        <Route path="alldetail/:id" element={<AllDetail />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="phones/:id" element={<PhonesDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
