import Dish from './Components/Dish';
import { Title, Wrapper, DishesList } from './Dishes.styled';

const Dishes = ({ title, dishes, styles }) => {
   return (
     <Wrapper name={title}>
       <div className="container">
         <Title styles={styles}>{title}</Title>
         <DishesList>
           {dishes.map(dish => (
             <Dish data={dish} key={dish.id} index={dish.id} />
           ))}
         </DishesList>
       </div>
     </Wrapper>
   );
};

export default Dishes;
