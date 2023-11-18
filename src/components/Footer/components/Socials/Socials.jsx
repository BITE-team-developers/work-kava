import { Icons, IconsBox } from './Socials.styled';
import { Title } from './Socials.styled';
import { SocialLinksList } from 'components/SocialLinksList/SocialLinksList';

export const Socials = () => {
  return (
    <Icons>
      <Title>We are on socials</Title>
      <IconsBox>
        <SocialLinksList />
      </IconsBox>
    </Icons>
  );
};
