import { memo } from 'react';
import Hero from '../components/Hero';
import OurBlogs from '../components/OurBlog';
import TopBrands from '../components/TopBrands';
import IPhone from '../components/Iphone';
import Categories from '../components/Categories';
import BlueCards from '../components/BlueCards';
import PhonesList from '../components/Phones';
import FourCard from '../components/FourCard';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <BlueCards />
      <PhonesList />
      <IPhone />
      <FourCard />
      <TopBrands />
      <OurBlogs />
    </>
  );
};

export default memo(Home);
