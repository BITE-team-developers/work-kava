import {
  Currency,
  DishImage,
  DishTitle,
  ImageWrapper,
  Price,
  PriceColumn,
  PriceText,
  PriceWrapper
} from './FastfoodItem.styled';

export const FastfoodItem = ({
  item: {
    name,
    title,
    image,
    smallSize,
    bigSize,
    smallPrice,
    bigPrice,
    currency
  }
}) => {
  return (
    <>
      <DishTitle>{name}</DishTitle>
      <ImageWrapper>
        <picture>
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${image}@2x.webp 2x`}
            type="image/webp"
            media="(min-width: 1440px)"
            width="485"
            height="246"
          />
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}@2x.png 2x`}
            media="(min-width: 1440px)"
            width="485"
            height="246"
          />
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${image}-table.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${image}-table@2x.webp 2x`}
            type="image/webp"
            media="(min-width: 1024px)"
            width="402"
            height="186"
          />
          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-table.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-table@2x.png 2x`}
            media="(min-width: 1024px)"
            width="402"
            height="186"
          />

          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${image}-mobil.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${image}-mobil@2x.webp 2x`}
            type="image/webp"
            media="(max-width: 1024px)"
            width="304"
            height="186"
          />

          <source
            srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-mobil.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-mobil@2x.png 2x`}
            media="(max-width: 1024px)"
            width="304"
            height="186"
          />

          <DishImage
            title={title}
            src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.png`}
            alt={name}
            width="485"
            height="246"
          />
        </picture>
      </ImageWrapper>
      <PriceWrapper>
        <PriceColumn>
          <PriceText>{smallSize}</PriceText>
          <Price>{smallPrice}</Price>
          <Currency>{currency}</Currency>
        </PriceColumn>
        <PriceColumn>
          <PriceText>{bigSize}</PriceText>
          <Price>{bigPrice}</Price>
          <Currency>{currency}</Currency>
        </PriceColumn>
      </PriceWrapper>
    </>
  );
};
