import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    location: 'Downtown',
    rating: 4.8,
    deliveryTime: 25,
  },
  {
    id: 2,
    name: 'Burger King',
    cuisine: 'American',
    location: 'Midtown',
    rating: 4.5,
    deliveryTime: 20,
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    location: 'Uptown',
    rating: 4.9,
    deliveryTime: 30,
  },
  {
    id: 4,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    location: 'Downtown',
    rating: 4.6,
    deliveryTime: 22,
  },
  {
    id: 5,
    name: 'Curry House',
    cuisine: 'Indian',
    location: 'Midtown',
    rating: 4.7,
    deliveryTime: 28,
  },
  {
    id: 6,
    name: 'Noodle Express',
    cuisine: 'Chinese',
    location: 'Uptown',
    rating: 4.4,
    deliveryTime: 18,
  },
];

const Restaurants = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        All Restaurants
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

