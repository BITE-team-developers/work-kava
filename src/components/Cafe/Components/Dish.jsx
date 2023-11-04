import {
  DishItem,
  Picture,
  DishItemBox,
  DishName,
  Price,
  Currency,
  ImageBox,
  Img
} from './Dish.styled';
import { ImagesSource } from './Images';
import { Ingredients } from './Ingredients';

export const Dish = ({
  data: { name, ingredients, price },
  index,
  title,
  styles
}) => {
  const imageName = name.toLowerCase().replace(/ /g, '-');
  const isEven = index % 2 === 0;

  return (
    <DishItem isEven={isEven} styles={styles}>
      <ImageBox isEven={isEven} styles={styles}>
        <Picture isEven={isEven} styles={styles} title={title}>
          <ImagesSource imageName={imageName} page='cafe' />
          <Img
            title={title}
            src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}.png`}
            alt={name}
          />
        </Picture>
      </ImageBox>

      <DishItemBox isEven={isEven} styles={styles}>
        <DishName styles={styles}>{name}</DishName>
        <Ingredients
          isEven={isEven}
          ingredients={ingredients}
          styles={styles}
        />
      </DishItemBox>

      <Price isEven={isEven} styles={styles}>
        {price}
        <Currency>₴</Currency>
      </Price>
    </DishItem>
  );
};
