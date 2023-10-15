// import { Svg } from 'components/SvgIcon/SvgIcon';
import { Container, Section } from 'components/App.styled';
import FastfoodList from './FastfoodList';
import { FastfoodSection } from './FastfoodCategories.styled';

const FastfoodCategories = ({ data }) => {
  return (
    <>
      {data.map(({ category, id }) => (
        <FastfoodSection key={id}>
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
