import { Hero } from 'components/Hero/Hero';
import { HomePagePlase } from 'components/HomePages/HomePagePlase';

const homePages = [
  {
    id: '1',
    title: 'Cafe',
    description:
      'Work with taste! Delicious aromatic coffee for every taste prepared ' +
      'by an experienced barista, as well as elegant desserts made with ' +
      "love by our confectioners. It's all waiting for you in our coffee " +
      'shop.',
    linkTo: '/cafe'
  },
  {
    id: '2',
    title: 'Fastfood',
    description:
      'Time for lunch, but not much time? Our fast food is at your service. ' +
      'Fast, high quality, tasty. Own baking and certified products. Great ' +
      'choice for every taste.',
    linkTo: '/fastfood'
  },
  {
    id: '3',
    title: 'Coworking',
    description:
      'Work with taste! Delicious aromatic coffee for every taste prepared ' +
      'by an experienced barista, as well as elegant desserts made with ' +
      "love by our confectioners. It's all waiting for you in our coffee " +
      'shop.',
    linkTo: '/coworking'
  }
];

const Home = () => {
  return (
    <>
      <Hero page="home" />
      {homePages.map((section, index) => (
        <HomePagePlase
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          linkTo={section.linkTo}
          styles={index % 2 !== 0 ? 'dark' : 'light'}
        />
      ))}
    </>
  );
};

export default Home;
