import { memo } from 'react';
import Hero from '../components/Hero';

const Products = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default memo(Products);
