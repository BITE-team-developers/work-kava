// import { Svg } from 'components/SvgIcon/SvgIcon';
import { Container, Section } from 'components/App.styled';
import FastfoodList from './FastfoodList';
import { FastfoodSection } from './FastfoodCategories.styled';

const FastfoodCategories = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map(({ category, id, backgroundImage }) => (
        <FastfoodSection key={id} bgImage={backgroundImage}>
          <Container>
            <h2>{category}</h2>
            {/* <Svg></Svg> */}
            {/* <FastfoodList items={category.items} /> */}
          </Container>
        </FastfoodSection>
      ))}
    </>
  );
};

export default FastfoodCategories;
