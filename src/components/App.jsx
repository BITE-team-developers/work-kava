import { ButtonBlue } from './miniComponents/ButtonBlue/ButtonBlue';
import { ButtonWhite } from './miniComponents/ButtonWhite/ButtonWhite';

const App = () => {
  const handleClick = () => {
    console.log('button test');
  };
  return (
    <>
      <h1>Hello BITE developers!</h1>
      <div
        style={{ width: '600px', height: '150px', backgroundColor: 'black' }}
      >
        <ButtonWhite action={handleClick} />
      </div>
      <ButtonBlue action={handleClick} />
    </>
  );
};

export default App;
