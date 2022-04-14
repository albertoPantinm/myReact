import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Arepa',
    description: 'Traditional Venezuelan gluten-free sandwich. Stuffed ith a variety of savory fillings!',
    price: 8.99,
  },
  {
    id: 'm2',
    name: 'Cachapa',
    description: 'A corn dough patty topped with handmade white cheese.',
    price: 11.50,
  },
  {
    id: 'm3',
    name: 'Pabellon Criollo',
    description: 'A platter of pulled beef, beans plantain and rice. Served with avocado and green sauce',
    price: 22.99,
  },
  {
    id: 'm4',
    name: 'Empanada',
    description: 'Venezuelan style empanadas stuffed with a vierety of savory fillings',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
