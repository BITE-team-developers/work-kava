import Dish from './Components/Dish';
import { Title, Wrapper, DishesList } from './Dishes.styled';

const Dishes = ({ title, dishes, styles }) => {
  return (
    <Wrapper name={title}>
      <div className="container">
        <Title styles={styles}>{title}</Title>
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
      </div>
    </Wrapper>
  );
};

export default Dishes;
