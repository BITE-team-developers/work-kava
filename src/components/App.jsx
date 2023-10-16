import {
  BlueButton,
  CoworkingBlueButton,
  CoworkingWhiteButton,
  FooterButton,
  FormButton,
  WhiteButton
} from 'styles/buttonStyles';
import { DarkSection, Section } from './App.styled';
import { Header } from './Header/Header';

const App = () => {
  return (
    <>
      <Section>
        <Header />
        <BlueButton type="button" onClick={console.log(123)}>
          Details
        </BlueButton>
        <CoworkingBlueButton type="button" onClick={console.log(123)}>
          Book now
        </CoworkingBlueButton>
        <FormButton
          type="submit"
          onClick={() => {
            console.log(123);
            return false;
          }}
        >
          Book now
        </FormButton>
      </Section>

      <DarkSection>
        <WhiteButton type="button" onClick={console.log(123)}>
          Details
        </WhiteButton>
        <CoworkingWhiteButton type="button" onClick={console.log(123)}>
          Book now
        </CoworkingWhiteButton>
        <FooterButton
          type="submit"
          onClick={() => {
            console.log(123);
            return false;
          }}
        >
          Subscribe
        </FooterButton>
      </DarkSection>
      <h1>Hello BITE developers!</h1>
    </>
  );
};

export default App;
