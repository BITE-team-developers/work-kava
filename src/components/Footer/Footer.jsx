import { Logo } from "./components/Logo/Logo";
import { Container } from 'components/App.styled';
import { Section, FooterBox, FooterContainer } from "./Footer.styled";
import { Contacts } from "./components/Contacts/Contacts";
import { Socials } from "./components/Socials/Socials";
import { SubscribeForm } from "./components/SubscribeForm/SubscribeForm";

export const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterContainer>
                    <FooterBox>
                        <Logo />
                        <Contacts />
                    </FooterBox>
                        <Socials />
                        <SubscribeForm />
                </FooterContainer>
            </Container>
        </Section>
           
    )
} 