import { useParams } from 'react-router-dom';
import FoodCard from '../components/FoodCard';

const restaurants = {
  1: {
    id: 1,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    location: 'Downtown',
    rating: 4.8,
    deliveryTime: 25,
    foods: [
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
        price: 12.99,
        isPopular: true,
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Traditional pizza with pepperoni and mozzarella cheese',
        price: 14.99,
        isPopular: true,
      },
      {
        id: 3,
        name: 'BBQ Chicken Pizza',
        description: 'Delicious pizza with BBQ sauce, chicken, and red onions',
        price: 16.99,
        isPopular: false,
      },
      {
        id: 4,
        name: 'Vegetarian Pizza',
        description: 'Fresh vegetables and mozzarella on a crispy crust',
        price: 13.99,
        isPopular: false,
      },
    ],
  },
  2: {
    id: 2,
    name: 'Burger King',
    cuisine: 'American',
    location: 'Midtown',
    rating: 4.5,
    deliveryTime: 20,
    foods: [
      {
        id: 5,
        name: 'Classic Burger',
        description: 'Juicy beef patty with lettuce, tomato, and special sauce',
        price: 8.99,
        isPopular: true,
      },
      {
        id: 6,
        name: 'Cheese Burger',
        description: 'Classic burger with melted cheese',
        price: 9.99,
        isPopular: true,
      },
      {
        id: 7,
        name: 'Bacon Burger',
        description: 'Burger with crispy bacon and cheddar cheese',
        price: 11.99,
        isPopular: false,
      },
    ],
  },
  3: {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    location: 'Uptown',
    rating: 4.9,
    deliveryTime: 30,
    foods: [
      {
        id: 8,
        name: 'Salmon Sushi Roll',
        description: 'Fresh salmon with avocado and cucumber',
        price: 15.99,
        isPopular: true,
      },
      {
        id: 9,
        name: 'Dragon Roll',
        description: 'Eel and cucumber topped with avocado',
        price: 17.99,
        isPopular: true,
      },
      {
        id: 10,
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber',
        price: 12.99,
        isPopular: false,
      },
    ],
  },
};

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants[parseInt(id)];

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Restaurant not found</h1>
      </div>
    );
  }

  const getRestaurantImage = (id) => {
    const imageMap = {
      1: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop',
      2: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop',
      3: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=400&fit=crop',
    };
    return imageMap[id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="h-64 overflow-hidden">
          <img
            src={getRestaurantImage(restaurant.id)}
            alt={restaurant.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop';
            }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {restaurant.name}
              </h1>
              <p className="text-gray-600 text-lg">{restaurant.cuisine} Cuisine</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-500 mb-1">
                ⭐ {restaurant.rating}
              </div>
              <p className="text-gray-600">⏱️ {restaurant.deliveryTime} min</p>
            </div>
          </div>
          <p className="text-gray-600">📍 {restaurant.location}</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Menu</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant.foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;

