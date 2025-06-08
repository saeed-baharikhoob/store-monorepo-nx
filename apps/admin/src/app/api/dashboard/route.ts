import { NextResponse } from 'next/server';
import { products } from '@my-store/data';

export async function GET() {
  // Calculate dashboard statistics
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'Active').length;
  const lowStockProducts = products.filter(p => p.status === 'Low Stock').length;
  const outOfStockProducts = products.filter(p => p.status === 'Out of Stock').length;

  const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

  // Statistics by category
  const categoryStats = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        count: 0,
        revenue: 0,
        averagePrice: 0,
        totalPrice: 0
      };
    }

    acc[product.category].count++;
    acc[product.category].revenue += product.price * product.stock;
    acc[product.category].totalPrice += product.price;

    return acc;
  }, {} as Record<string, any>);

  // Calculate average price for each category
  Object.keys(categoryStats).forEach(category => {
    categoryStats[category].averagePrice =
      categoryStats[category].totalPrice / categoryStats[category].count;
  });

  const dashboardData = {
    stats: {
      totalProducts,
      activeProducts,
      lowStockProducts,
      outOfStockProducts,
      totalRevenue,
      averagePrice,
    },
    categoryData: Object.entries(categoryStats).map(([name, stats]: [string, any]) => ({
      name,
      sales: stats.revenue,
      count: stats.count,
      averagePrice: stats.averagePrice
    })),
    // Sales chart data (mock data)
    salesData: [
      { name: 'Jan', sales: 4000 },
      { name: 'Feb', sales: 3000 },
      { name: 'Mar', sales: 5000 },
      { name: 'Apr', sales: 4500 },
      { name: 'May', sales: 6000 },
      { name: 'Jun', sales: 5500 },
    ],
    // Recent orders (mock data)
    recentOrders: [
      { id: '#12345', customer: 'John Doe', amount: 1299.99, status: 'Delivered' },
      { id: '#12346', customer: 'Jane Smith', amount: 899.99, status: 'Processing' },
      { id: '#12347', customer: 'Bob Johnson', amount: 1899.99, status: 'Shipped' },
      { id: '#12348', customer: 'Alice Brown', amount: 399.99, status: 'Pending' },
    ]
  };

  return NextResponse.json(dashboardData);
}
