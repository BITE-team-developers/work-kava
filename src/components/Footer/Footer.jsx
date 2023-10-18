import { Logo } from "./components/Logo/Logo";
import { Container } from 'components/App.styled';
import { Section } from "./Footer.styled";
import { Contacts } from "./components/Contacts/Contacts";
import { Socials } from "./components/Socials/Socials";

export const Footer = () => {
    return (
        <Section>
            <Container>
                <Logo />
                <Contacts />
                <Socials />
            </Container>
        </Section>
           
    )
} 