import { DecorBox, Svg } from './Dish.styled';
import icons from '../../../images/sprite.svg';

const Decor = ({ name }) => {
  return (
    <DecorBox name={name}>
      <Svg>
        {name === 'Desserts' ? (
          <use xlinkHref={`${icons}#icon-pointsInvert`} />
        ) : (
          <use xlinkHref={`${icons}#icon-largeCoffee`} />
        )}
      </Svg>
    </DecorBox>
  );
};

export default Decor