import { Header } from './Header/Header';
import { ButtonBlue } from './miniComponents/ButtonBlue/ButtonBlue';
import { ButtonWhite } from './miniComponents/ButtonWhite/ButtonWhite';

const App = () => {
  const handleClick = () => {
    console.log('button test');
  };
  return (
    <>
      <Header />
      <h1>Hello BITE developers!</h1>
      <div
        style={{ width: '600px', height: '150px', backgroundColor: 'black' }}
      >
        <ButtonWhite action={handleClick} title="width 400" />
        <ButtonWhite
          action={handleClick}
          style={{ width: '444px' }}
          title="width 444"
        />
      </div>
      <ButtonBlue action={handleClick} title="width 400" />
      <ButtonBlue
        action={handleClick}
        style={{ width: '444px' }}
        title="width 444"
      />
    </>
  );
};

export default App;
