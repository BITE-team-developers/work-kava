import { ContentHolder } from './FastfoodItem.styled';

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
    <ContentHolder>
      <h3>{name}</h3>
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

        <img
          title={title}
          src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${image}.png`}
          alt={name}
        />
      </picture>
      <p>{smallSize}</p>
      <p>{smallPrice}</p>
      <span>{currency}</span>
      <p>{bigSize}</p>
      <p>{bigPrice}</p>
      <span>{currency}</span>
    </ContentHolder>
  );
};

export default FastfoodItem;
