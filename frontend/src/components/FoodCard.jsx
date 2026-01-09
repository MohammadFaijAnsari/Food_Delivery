import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  const getFoodImage = (foodName) => {
    const imageMap = {
      'Margherita Pizza': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      'Pepperoni Pizza': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
      'BBQ Chicken Pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      'Vegetarian Pizza': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop',
      'Classic Burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      'Cheese Burger': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
      'Bacon Burger': 'https://images.unsplash.com/photo-1553979459-d2229ba7433w?w=400&h=300&fit=crop',
      'Salmon Sushi Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      'Dragon Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      'California Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    };
    return imageMap[foodName] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/food/${food.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={getFoodImage(food.name)}
            alt={food.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
            }}
          />
          {food.isPopular && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Popular
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/food/${food.id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
            {food.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {food.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">
            ${food.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...food, image: getFoodImage(food.name) });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

