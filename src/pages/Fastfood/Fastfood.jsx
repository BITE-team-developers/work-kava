import FastfoodCategories from 'components/Fastfood/FastfoodCategories';
import { theme } from 'styles';

const data = [
  {
    id: 1,
    category: 'Burgers',
    // backgroundColor: theme.colors.primary,
    backgroundImage: 'burgers'
  },
  {
    id: 2,
    category: 'Rolls',
    // backgroundColor: theme.colors.primary,
    backgroundImage: 'rolls'
  },
  {
    id: 3,
    category: 'Hotdogs',
    // backgroundColor: theme.colors.primary,
    backgroundImage: 'hotdogs'
  }
];

const Fastfood = () => {
  return <FastfoodCategories data={data} />;
};

export default Fastfood;
