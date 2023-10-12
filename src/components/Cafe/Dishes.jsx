import Dish from './Components/Dish';
import { Title, Wrapper } from './Dishes.styled';

const Dishes = ({ title, dishes, styles }) => {
  return (
    <Wrapper name={title}>
      <div className="container">
        <Title styles={styles}>{title}</Title>
        <ul>
          {dishes.map(dish => (
            <Dish data={dish} key={dish.id} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dishes;
