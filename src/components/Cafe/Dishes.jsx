import { Container, CafeSection } from 'components/App.styled';
import {Dish} from './Components/Dish';
import { Title, DishesList } from './Dishes.styled';

export const Dishes = ({ title, dishes, styles, firstDishes }) => {
  const titleName = title.toLowerCase().replace(/ /g, '-');

  return (
    <CafeSection page="cafe" firstDishes={firstDishes} name={titleName}>
      <Container>
        <Title styles={styles} name={titleName}>{title}</Title>
        <DishesList>
          {dishes.map(dish => (
            <Dish
              title={title}
              data={dish}
              key={dish.id}
              index={dish.id}
              styles={styles}
            />
          ))}
        </DishesList>
      </Container>
    </CafeSection>
  );
};


