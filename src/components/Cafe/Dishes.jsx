import Dish from "./Components/Dish";

const Dishes = ({ title, dishes }) => {
   return (
    <div className="container">
      <h2>{title}</h2>
      <ul>{dishes.map(dish => <Dish data={dish} key={dish.id}/>)}</ul>
    </div>
  );
};

export default Dishes;
