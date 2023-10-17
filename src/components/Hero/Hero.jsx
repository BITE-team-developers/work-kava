import { Container } from 'components/App.styled';
import {
  SectionHero,
  MainText,
  DescrText,
  TextContainer,
  HeroContainer
} from './Hero.styled';
import sprite from '../../images/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

const links = [
  {
    icon: 'twitter',
    text: 'Twitter',
    link: 'https://twitter.com/?lang=uk'
  },
  {
    icon: 'telegram',
    text: 'Telegram',
    link: 'https://web.telegram.org/a/'
  },
  {
    icon: 'linkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/'
  },
  {
    icon: 'facebook',
    text: 'Facebook',
    link: 'https://uk-ua.facebook.com/'
  },
  {
    icon: 'instagram',
    text: 'Instagram',
    link: 'https://www.instagram.com/'
  }
];

const Hero = () => {
  return (
    <HeroContainer>
      <SectionHero>
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
          <ul style={{ display: 'flex', gap: 14, zIndex: 999 }}>
            {links.map((link, index) => (
              <li
                key={index}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#1B253F'
                }}
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.text}
                >
                  <Svg
                    w={40}
                    h={40}
                    icon={link.icon}
                    style={{ fill: '#fff' }}
                  ></Svg>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </SectionHero>
    </HeroContainer>
  );
};

export default Hero;
