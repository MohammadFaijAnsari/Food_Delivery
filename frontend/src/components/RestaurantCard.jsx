import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const getRestaurantImage = (id, cuisine) => {
    const imageMap = {
      1: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      2: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
      3: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      4: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      5: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      6: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    };
    return imageMap[id] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop';
  };

  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={getRestaurantImage(restaurant.id, restaurant.cuisine)}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop';
          }}
        />
        <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-800">
          ⭐ {restaurant.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {restaurant.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>📍 {restaurant.location}</span>
          <span>⏱️ {restaurant.deliveryTime} min</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

