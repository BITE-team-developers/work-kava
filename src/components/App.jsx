import { Button } from './Button/Button';

const App = () => {
  const handleClick = () => {
    console.log('button test');
  };
  return (
    <>
      <h1>Hello BITE developers!</h1>
      <Button action={handleClick} />
    </>
  );
};

export default App;
