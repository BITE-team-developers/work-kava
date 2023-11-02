import {Dishes} from 'components/Cafe/Dishes';

const CoffeeClassicMenu = [
  {
    id: 1,
    name: 'Ristretto',
    ingredients: { Coffee: '8 g', Water: '20 ml' },
    price: '30'
  },
  {
    id: 2,
    name: 'Espresso',
    ingredients: { Coffee: '8 g', Water: '35 ml' },
    price: '30'
  },
  {
    id: 3,
    name: 'Doppio',
    ingredients: { Coffee: '16 g', Water: '70 ml' },
    price: '45'
  },
  {
    id: 4,
    name: 'Americano',
    ingredients: { Coffee: '8 g', Water: '120 ml', 'Milk*': '' },
    price: '30'
  }
];
const CoffeeWithMilk = [
  {
    id: 1,
    name: 'Flat white',
    ingredients: { Coffee: '16 g', Water: '70 ml', Milk: '110 ml' },
    price: '60'
  },
  {
    id: 2,
    name: 'Latte',
    ingredients: { Coffee: '8 g', Water: '35 ml', Milk: '150 ml' },
    price: '45'
  },
  {
    id: 3,
    name: 'Macchiato',
    ingredients: { Coffee: '8 g', Water: '35 ml', Milk: '50 ml' },
    price: '45'
  },
  {
    id: 4,
    name: 'Cappuccino',
    ingredients: { Coffee: '2 g', Milk: '180 ml' },
    price: '40'
  }
];
const Desserts = [
  {
    id: 1,
    name: 'Tiramisu',
    ingredients: { Weight: '55 g' },
    price: '60'
  },
  {
    id: 2,
    name: 'Brownie',
    ingredients: { Weight: '55 g' },
    price: '45'
  },
  {
    id: 3,
    name: 'Eclairs',
    ingredients: { Weight: '55 g' },
    price: '60'
  },
  {
    id: 4,
    name: 'Banoffee',
    ingredients: { Weight: '55 g' },
    price: '45'
  }
];

const Cafe = () => {
  return (
    <>
      <Dishes
        title="Coffee classic"
        dishes={CoffeeClassicMenu}
        styles="light"
        firstDishes={true}
      />
      <Dishes title="Coffee with milk" dishes={CoffeeWithMilk} styles="light" />
      <Dishes title="Desserts" dishes={Desserts} styles="dark" />
    </>
  );
};

export default Cafe;
