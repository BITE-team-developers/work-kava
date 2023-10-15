// import { Svg } from 'components/SvgIcon/SvgIcon';
import { Container, Section } from 'components/App.styled';
import FastfoodList from './FastfoodList';
import { FastfoodSection, Title } from './FastfoodCategories.styled';

const FastfoodCategories = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map(({ category, id, backgroundImage }, index) => (
        <FastfoodSection key={id} bgImage={backgroundImage}>
          <Container>
            <Title isEven={index % 2 === 0}>{category}</Title>
            {/* <Svg></Svg> */}
            {/* <FastfoodList items={category.items} /> */}
          </Container>
        </FastfoodSection>
      ))}
    </>
  );
};

export default FastfoodCategories;
