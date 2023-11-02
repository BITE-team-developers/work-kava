// import { Container } from 'components/App.styled';
import { FastfoodList } from './FastfoodList';
import {
  FastfoodContainer,
  FastfoodSection,
  Title
} from './FastfoodCategories.styled';

export const FastfoodCategories = ({ data }) => {
  return data.map(({ category, id, backgroundImage, dishes }, index) => (
    <FastfoodSection key={id} bgImage={backgroundImage}>
      <FastfoodContainer className={index % 2 === 0 ? 'even' : 'odd'}>
        <Title isEven={index % 2 === 0}>{category}</Title>
        <FastfoodList items={dishes} />
      </FastfoodContainer>
    </FastfoodSection>
  ));
};
