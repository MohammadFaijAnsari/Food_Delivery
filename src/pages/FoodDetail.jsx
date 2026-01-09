import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// All foods data from all restaurants
const allFoods = {
  1: {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil. Made with the finest ingredients and baked to perfection in our wood-fired oven.',
    price: 12.99,
    isPopular: true,
    restaurantId: 1,
    restaurantName: 'Pizza Paradise',
    ingredients: ['Fresh Mozzarella', 'Tomato Sauce', 'Basil', 'Olive Oil'],
    calories: 280,
    prepTime: '15-20 min',
  },
  2: {
    id: 2,
    name: 'Pepperoni Pizza',
    description: 'Traditional pizza with pepperoni and mozzarella cheese. A classic favorite that never goes out of style.',
    price: 14.99,
    isPopular: true,
    restaurantId: 1,
    restaurantName: 'Pizza Paradise',
    ingredients: ['Pepperoni', 'Mozzarella Cheese', 'Tomato Sauce', 'Oregano'],
    calories: 320,
    prepTime: '15-20 min',
  },
  3: {
    id: 3,
    name: 'BBQ Chicken Pizza',
    description: 'Delicious pizza with BBQ sauce, chicken, and red onions. A perfect blend of sweet and savory flavors.',
    price: 16.99,
    isPopular: false,
    restaurantId: 1,
    restaurantName: 'Pizza Paradise',
    ingredients: ['BBQ Sauce', 'Grilled Chicken', 'Red Onions', 'Mozzarella'],
    calories: 350,
    prepTime: '18-22 min',
  },
  4: {
    id: 4,
    name: 'Vegetarian Pizza',
    description: 'Fresh vegetables and mozzarella on a crispy crust. A healthy and delicious option for vegetarians.',
    price: 13.99,
    isPopular: false,
    restaurantId: 1,
    restaurantName: 'Pizza Paradise',
    ingredients: ['Bell Peppers', 'Mushrooms', 'Olives', 'Onions', 'Mozzarella'],
    calories: 240,
    prepTime: '15-20 min',
  },
  5: {
    id: 5,
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, and special sauce. Served with crispy fries on the side.',
    price: 8.99,
    isPopular: true,
    restaurantId: 2,
    restaurantName: 'Burger King',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Special Sauce', 'Bun'],
    calories: 450,
    prepTime: '10-15 min',
  },
  6: {
    id: 6,
    name: 'Cheese Burger',
    description: 'Classic burger with melted cheese. Simple, delicious, and satisfying.',
    price: 9.99,
    isPopular: true,
    restaurantId: 2,
    restaurantName: 'Burger King',
    ingredients: ['Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Bun'],
    calories: 480,
    prepTime: '10-15 min',
  },
  7: {
    id: 7,
    name: 'Bacon Burger',
    description: 'Burger with crispy bacon and cheddar cheese. For those who love extra flavor and crunch.',
    price: 11.99,
    isPopular: false,
    restaurantId: 2,
    restaurantName: 'Burger King',
    ingredients: ['Beef Patty', 'Bacon', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Bun'],
    calories: 550,
    prepTime: '12-18 min',
  },
  8: {
    id: 8,
    name: 'Salmon Sushi Roll',
    description: 'Fresh salmon with avocado and cucumber. Made with premium sushi-grade fish.',
    price: 15.99,
    isPopular: true,
    restaurantId: 3,
    restaurantName: 'Sushi Master',
    ingredients: ['Fresh Salmon', 'Avocado', 'Cucumber', 'Sushi Rice', 'Nori'],
    calories: 220,
    prepTime: '8-12 min',
  },
  9: {
    id: 9,
    name: 'Dragon Roll',
    description: 'Eel and cucumber topped with avocado. A premium sushi roll with rich flavors.',
    price: 17.99,
    isPopular: true,
    restaurantId: 3,
    restaurantName: 'Sushi Master',
    ingredients: ['Eel', 'Cucumber', 'Avocado', 'Sushi Rice', 'Nori', 'Eel Sauce'],
    calories: 280,
    prepTime: '10-15 min',
  },
  10: {
    id: 10,
    name: 'California Roll',
    description: 'Crab, avocado, and cucumber. A classic sushi roll that everyone loves.',
    price: 12.99,
    isPopular: false,
    restaurantId: 3,
    restaurantName: 'Sushi Master',
    ingredients: ['Crab', 'Avocado', 'Cucumber', 'Sushi Rice', 'Nori'],
    calories: 200,
    prepTime: '8-12 min',
  },
};

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const food = allFoods[parseInt(id)];

  const getFoodImage = (foodName) => {
    const imageMap = {
      'Margherita Pizza': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
      'Pepperoni Pizza': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop',
      'BBQ Chicken Pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      'Vegetarian Pizza': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop',
      'Classic Burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
      'Cheese Burger': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
      'Bacon Burger': 'https://images.unsplash.com/photo-1553979459-d2229ba7433w?w=800&h=600&fit=crop',
      'Salmon Sushi Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      'Dragon Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      'California Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    };
    return imageMap[foodName] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop';
  };

  if (!food) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Food not found</h1>
          <Link
            to="/restaurants"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...food, image: getFoodImage(food.name) });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-orange-500">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/restaurants" className="hover:text-orange-500">Restaurants</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={`/restaurant/${food.restaurantId}`} className="hover:text-orange-500">
                {food.restaurantName}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">{food.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Food Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img
                src={getFoodImage(food.name)}
                alt={food.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop';
                }}
              />
              {food.isPopular && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
            </div>
          </div>

          {/* Food Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <Link
                to={`/restaurant/${food.restaurantId}`}
                className="text-orange-500 hover:text-orange-600 text-sm font-semibold"
              >
                {food.restaurantName}
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{food.name}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{food.description}</p>

            <div className="flex items-center space-x-6 mb-6 pb-6 border-b">
              <div>
                <span className="text-gray-500 text-sm">Price</span>
                <p className="text-3xl font-bold text-orange-500">${food.price}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Calories</span>
                <p className="text-xl font-semibold text-gray-800">{food.calories} cal</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Prep Time</span>
                <p className="text-xl font-semibold text-gray-800">{food.prepTime}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-gray-400 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Related Foods Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(allFoods)
              .filter((f) => f.restaurantId === food.restaurantId && f.id !== food.id)
              .slice(0, 3)
              .map((relatedFood) => (
                <Link
                  key={relatedFood.id}
                  to={`/food/${relatedFood.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={getFoodImage(relatedFood.name)}
                      alt={relatedFood.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{relatedFood.name}</h3>
                    <p className="text-orange-500 font-semibold">${relatedFood.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;

