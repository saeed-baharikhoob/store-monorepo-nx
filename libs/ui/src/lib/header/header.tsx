import { ShoppingCart, Menu, User, Heart, Package } from 'lucide-react';

export interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

export function Header({ cartItemsCount = 0, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Menu className="w-6 h-6 text-gray-600 md:hidden mr-3" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechStore
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">
              Support
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Package className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
