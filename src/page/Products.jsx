import { memo } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Phones from '../components/Phones';
import TopBrands from '../components/TopBrands';
import FourCard from '../components/FourCard';

const Products = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Phones />
      <FourCard />
    </div>
  );
};

export default memo(Products);
