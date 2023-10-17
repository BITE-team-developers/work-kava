import { Container } from 'components/App.styled';
import LinkList from 'components/LinkList';
import {
  SectionHero,
  MainText,
  DescrText,
  TextContainer,
  HeroContainer
} from './Hero.styled';

const Hero = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <TextContainer>
          <MainText>
            Work & comfort? <br />
            It's easy!
          </MainText>
          <DescrText>
            Creative coffee shop <br />
            Work Kava is a cozy <br />
            location for individual <br />
            work, meetings, master <br />
            classes and much more.
          </DescrText>
        </TextContainer>

        <Container>
          <LinkList />
        </Container>
      </HeroContainer>
    </SectionHero>
  );
};

export default Hero;
