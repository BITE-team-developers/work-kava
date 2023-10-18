import { Container } from 'components/App.styled';
import SocialLinksList from 'components/SocialLinksList';
import {
  SectionHero,
  MainText,
  DescrText,
  TextContainer,
  HeroContainer
} from './Hero.styled';

const Hero = ({ page }) => {
  return (
    <SectionHero page={page}>
      <HeroContainer>
        <TextContainer>
          <MainText>
            {page === 'home'
              ? `Work & comfort? It's easy!`
              : 'Work for an hour or for the whole day?'}
          </MainText>
          <DescrText page={page}>
            Creative coffee shop <br />
            Work Kava is a cozy <br />
            location for individual <br />
            work, meetings, master <br />
            classes and much more.
          </DescrText>
        </TextContainer>

        {page === 'home' && (
          <Container>
            <SocialLinksList />
          </Container>
        )}
      </HeroContainer>
    </SectionHero>
  );
};

export default Hero;
