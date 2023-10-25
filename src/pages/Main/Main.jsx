import Hero from 'components/Hero';
import HomePageCafe from 'components/HomePageCafe/HomePageCafe';

import HomePageCoworking from 'components/HomePageCoworking/HomePageCoworking';
import HomePageFastfood from 'components/HomePageFastfood/HomePageFastfood';

const Main = () => {
  return (
    <>
      <Hero page="home" />
      <HomePageCafe />
      <HomePageFastfood/>
      <HomePageCoworking/>
    </>
  )
};

export default Main;
