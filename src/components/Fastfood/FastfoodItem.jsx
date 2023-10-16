import {
  Currency,
  DishImage,
  DishTitle,
  Price,
  PriceColumn,
  PriceText,
  PriceWrapper
} from './FastfoodItem.styled';

const FastfoodItem = ({
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
      <picture>
        <source
          srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}@2x.png 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-table.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-table@2x.png 2x`}
          media="(min-width: 1024x)"
        />
        <source
          srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-mobil.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}-mobil@2x.png 2x`}
          media="(max-width: 1024px)"
        />

        <DishImage
          title={title}
          src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.png`}
          alt={name}
        />
      </picture>
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

export default FastfoodItem;
