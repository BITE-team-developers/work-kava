// import { Svg } from 'components/SvgIcon/SvgIcon';
import { Container } from 'components/App.styled';
import FastfoodList from './FastfoodList';
import { FastfoodSection, Title } from './FastfoodCategories.styled';

const FastfoodCategories = ({ data }) => {
  return (
    <>
      {data.map(({ category, id, backgroundImage, dishes }, index) => (
        <FastfoodSection key={id} bgImage={backgroundImage}>
          <Container>
            <Title isEven={index % 2 === 0}>{category}</Title>
            <FastfoodList items={dishes} />
          </Container>
        </FastfoodSection>
      ))}
    </>
  );
};

export default FastfoodCategories;
