import { SocialLinksList } from 'components/SocialLinksList/SocialLinksList';
import { BackdropHeader, CloseButton } from './ModalNav.styled';
import { Navigation } from './Navigation';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useEffect } from 'react';

export const ModalNav = ({ action }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action} aria-label="close">
        <Svg w={36} h={36} icon="close" />
      </CloseButton>
      <Navigation action={action} />
      <SocialLinksList style={{ marginBottom: '50px' }} />
    </BackdropHeader>
  );
};
