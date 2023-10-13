import sprite from 'images/sprite.svg';

export const Svg = ({ w, h, icon, style }) => {
  return (
    <svg
      width={w}
      height={h}
      aria-hidden="true"
      role="presentation"
      style={style}
    >
      <use href={`${sprite}#icon-${icon}`} />
    </svg>
  );
};
