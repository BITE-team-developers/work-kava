import CoworkingPlase from 'components/Coworking/CoworkingPlase';
import Hero from 'components/Hero';
import { Main } from './Coworking.styled';

const coworkings = [
  {
    id: '01',
    title: 'Workplace',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.'
  },
  {
    id: '02',
    title: 'Meeting room',
    description:
      'For business meetings, we suggest using a soundproofed room, which is equipped with everything you need.'
  },
  {
    id: '03',
    title: 'Hall for master classes',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.'
  }
];

const Coworking = () => {
  return (
    <>
      <Hero page="coworking" />
      <Main>
        {coworkings.map((coworking, index) => (
          <CoworkingPlase
            title={coworking.title}
            description={coworking.description}
            key={coworking.id}
            id={coworking.id}
            styles={index % 2 !== 0 ? 'dark' : 'light'}
          />
        ))}
      </Main>
    </>
  );
};

export default Coworking;
