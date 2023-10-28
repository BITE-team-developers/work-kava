import SocialLinksList from 'components/SocialLinksList';
import { BackdropHeader, CloseButton } from './ModalNav.styled';
import { Navigation } from './Navigation';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const ModalNav = ({ action }) => {
  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action}>
        <Svg w={36} h={36} icon="close" />
      </CloseButton>
      <Navigation action={action} />
      <SocialLinksList style={{ marginBottom: '50px' }} />
    </BackdropHeader>
  );
};
