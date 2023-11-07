export const ImagesSource = ({ imageName, page }) => {
  return (
    <>
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}_2x.webp 2x`}
        media="(min-width: 1440px)"
        type="image/webp"
      />
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}@2x.png 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}-table.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}-table_2x.webp 2x`}
        media="(min-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}-table.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}-table@2x.png 2x`}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}-mobil.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}-webp/${imageName}-mobil_2x.webp 2x`}
        media="(max-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}-mobil.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/${page}/${imageName}-mobil@2x.png 2x`}
        media="(max-width: 1024px)"
      />
    </>
  );
};
