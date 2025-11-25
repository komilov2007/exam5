import { memo } from 'react';
import FAQList from '../components/FAQList.jsx';
import FAQItem from '../components/FAQItem.jsx';
import FAQHero from '../components/FAQHero.jsx';
import FAQSearch from '../components/FAQSearch.jsx';

const FAQ = () => {
  return (
    <div>
      <FAQHero />
      <FAQSearch />
      <FAQItem />
      <FAQList />
    </div>
  );
};

export default memo(FAQ);
