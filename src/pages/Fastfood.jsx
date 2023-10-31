import { FastfoodCategories } from 'components/Fastfood/FastfoodCategories';

const data = [
  {
    id: 1,
    category: 'Burgers',
    dishes: [
      {
        id: 11,
        name: 'Hamburger',
        image: 'hamburger',
        smallSize: 'Standard',
        bigSize: 'Double',
        smallPrice: '45',
        bigPrice: '70',
        currency: '₴ '
      },
      {
        id: 12,
        name: 'Cheeseburger',
        image: 'cheeseburger',
        smallSize: 'Standard',
        bigSize: 'Double',
        smallPrice: '52',
        bigPrice: '80',
        currency: '₴ '
      }
    ],

    backgroundImage: 'burgers'
  },
  {
    id: 2,
    category: 'Rolls',
    dishes: [
      {
        id: 13,
        name: 'Chicken roll',
        image: 'chicken-roll',
        smallSize: 'Standard',
        bigSize: 'XL',
        smallPrice: '70',
        bigPrice: '90',
        currency: '₴ '
      },
      {
        id: 14,
        name: 'Beef roll',
        image: 'beef-roll',
        smallSize: 'Standard',
        bigSize: 'XL',
        smallPrice: '75',
        bigPrice: '95',
        currency: '₴ '
      }
    ],
    backgroundImage: 'rolls'
  },
  {
    id: 3,
    category: 'Hotdogs',
    dishes: [
      {
        id: 15,
        name: 'Bavarian hotdog',
        image: 'bavarian-hotdog',
        smallSize: 'Standard',
        bigSize: 'Double',
        smallPrice: '40',
        bigPrice: '60',
        currency: '₴ '
      },
      {
        id: 16,
        name: 'French hotdog',
        image: 'french-hotdog',
        smallSize: 'Standard',
        bigSize: 'Double',
        smallPrice: '35',
        bigPrice: '50',
        currency: '₴ '
      }
    ],
    backgroundImage: 'hotdogs'
  }
];

const Fastfood = () => {
  return <FastfoodCategories data={data} />;
};

export default Fastfood;
