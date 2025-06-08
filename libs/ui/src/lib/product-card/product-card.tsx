import { ShoppingCart, Star } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  rating?: number;
  category?: string;
  onAddToCart?: (id: string) => void;
}

export function ProductCard({
                              id,
                              title,
                              price,
                              image,
                              description,
                              rating = 4.5,
                              category,
                              onAddToCart,
                            }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>

        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">
              ${price.toFixed(2)}
            </span>
          </div>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(id)}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors group/btn"
            >
              <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
