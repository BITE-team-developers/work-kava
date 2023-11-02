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
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}_2x.webp 2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}-table.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}-table_2x.webp 2x`}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}-mobil.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}-mobil_2x.webp 2x`}
            media="(max-width: 1024px)"
          />

          <Img
            title={title}
            src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe-webp/${imageName}.webp`}
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
