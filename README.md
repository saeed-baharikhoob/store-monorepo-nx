# TechStore - Modern E-commerce Platform with Nx Monorepo

![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This project is a sample implementation of a monorepo architecture using Nx, showcasing both a storefront and an admin dashboard.

## 🚀 Features

### Customer Storefront (`apps/my-store`)
- **Product Catalog**: Browse tech products across multiple categories
- **Advanced Filtering**: Filter by category, price, and ratings
- **Real-time Search**: Instant product search functionality
- **Shopping Cart**: Add, remove, and update product quantities
- **Toast Notifications**: Real-time feedback for user actions

### Admin Dashboard (`apps/admin`)
- **Analytics Dashboard**: Sales overview with interactive charts
- **Product Management**: Full CRUD operations for products

## 🚀 Live Demo

| Application | Live Demo | Description |
|------------|-----------|-------------|
| **🛍️ Storefront** | [**🔗 View Demo**](https://store-monorepo-nx-my-store.vercel.app/) | Product catalog with shopping cart |
| **⚙️ Admin Panel** | [**🔗 View Demo**](https://store-monorepo-nx-admin.vercel.app/) | Product management dashboard |


## 🏗️ Architecture

This project follows the Nx monorepo structure with:
- **Apps**: Deployable applications
- **Libs**: Shared libraries for code reusability
- **Type Safety**: Full TypeScript support across all packages
- **State Management**: Centralized Redux store with Redux Toolkit
- **Component Library**: Reusable UI components with Tailwind CSS

## 📦 Tech Stack

### Core Technologies
- **[Nx](https://nx.dev/)** (v21.1.2) - Monorepo build system
- **[Next.js](https://nextjs.org/)** (v15.2.4) - Full-stack React framework
- **[React](https://react.dev/)** (v19.0.0) - UI library
- **[TypeScript](https://www.typescriptlang.org/)** (v5.7.2) - Type safety
- **[Redux Toolkit](https://redux-toolkit.js.org/)** (v2.8.2) - State management
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4.3) - Utility-first CSS

### Additional Libraries
- **Lucide React** - Modern icon library
- **Recharts** - Data visualization
- **React Redux** - React bindings for Redux

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- Yarn (v1.22.22) or npm
- Git

> **Note**: This project uses Yarn by default. All commands in this README use `yarn nx` syntax. If you prefer npm, use `npx nx` instead.

### Clone the repository
```bash
git clone https://github.com/saeed-baharikhoob/store-monorepo-nx
cd techstore-monorepo
```

### Install dependencies
```bash
yarn install
# or
npm install
```

### Running the applications

#### Run the customer storefront
```bash
yarn nx dev @my-store/my-store
# or
npx nx dev @my-store/my-store
```
The app will be available at `http://localhost:3000`

#### Run the admin dashboard
```bash
yarn nx dev @my-store/admin
# or
npx nx dev @my-store/admin
```
The admin panel will be available at `http://localhost:3001`

#### Run both applications simultaneously
```bash
yarn nx run-many --target=dev --projects=@my-store/my-store,@my-store/admin
# or
npx nx run-many --target=dev --projects=@my-store/my-store,@my-store/admin
```

## 📁 Project Structure

```
my-store/
├── apps/
│   ├── my-store/                 # Customer-facing e-commerce app
│   │   ├── src/
│   │   │   ├── app/             # Next.js app directory
│   │   │   │   ├── api/         # API routes
│   │   │   │   ├── page.tsx     # Home page
│   │   │   │   └── layout.tsx   # Root layout
│   │   └── package.json
│   │
│   └── admin/                    # Admin dashboard
│       ├── src/
│       │   ├── app/             # Next.js app directory
│       │   │   ├── api/         # Admin API routes
│       │   │   ├── products/    # Product management
│       │   │   └── page.tsx     # Dashboard
│       └── package.json
│
├── libs/
│   ├── ui/                      # Shared UI components
│   │   └── src/
│   │       └── lib/
│   │           ├── button/
│   │           ├── cart/
│   │           ├── header/
│   │           ├── product-card/
│   │           └── toast/
│   │
│   ├── data/                    # Shared data models & mock data
│   │   └── src/
│   │       └── lib/
│   │           └── data.ts
│   │
│   └── store/                   # Redux store configuration
│       └── src/
│           └── lib/
│               ├── store.ts
│               └── slices/
│                   ├── products.slice.ts
│                   ├── cart.slice.ts
│                   ├── ui.slice.ts
│                   └── auth.slice.ts
│
├── nx.json                      # Nx configuration
├── package.json                 # Root package.json
└── tsconfig.base.json          # Base TypeScript config
```

## 🚀 Available Scripts

### Development
```bash
# Development server
yarn nx dev @my-store/my-store     # Run storefront
yarn nx dev @my-store/admin        # Run admin panel

# Build applications  
yarn nx build @my-store/my-store   # Build storefront
yarn nx build @my-store/admin      # Build admin panel

# Start production build
yarn nx start @my-store/my-store   # Start production storefront
yarn nx start @my-store/admin      # Start production admin
```


## 🔧 Configuration

### Nx Target Configuration
This project uses Nx's automatic target inference for Next.js applications. The available targets (`dev`, `build`, `start`, etc.) are automatically detected from the Next.js configuration. No manual target configuration is needed in `project.json`.

### Project Naming Convention
Projects are referenced using their full names with the `@` prefix:
- `@my-store/my-store` - Customer storefront
- `@my-store/admin` - Admin dashboard
- `@my-store/ui` - UI components library
- `@my-store/data` - Data models library
- `@my-store/store` - Redux store library



## 🔍 Troubleshooting

### Common Issues

1. **"Cannot find configuration for task" error**
  - Use `dev` instead of `serve` for Next.js applications
  - Use the full project name with `@` prefix (e.g., `@my-store/my-store`)

2. **Port conflicts**
  - The storefront runs on port 3000 by default
  - The admin panel runs on port 3001 by default
  - Change ports in the respective `next.config.js` files if needed

3. **Nx Console**
  - Install the Nx Console extension for VS Code for a visual interface
  - Use `yarn nx list` to see available generators and executors

4. **Cache issues**
  - Clear Nx cache: `yarn nx reset`
  - Clear Next.js cache: `rm -rf apps/*/next`



## 🚢 Deployment

### Build for Production
```bash
# Build all applications
yarn nx run-many --target=build --configuration=production

# Build specific app
yarn nx build @my-store/my-store --configuration=production
yarn nx build @my-store/admin --configuration=production
```

### Start Production Server
```bash
# After building, start the production server
yarn nx start @my-store/my-store
yarn nx start @my-store/admin
```


## 📞 Contact

Linkedin: [https://www.linkedin.com/in/saeed-baharikhoob/](https://www.linkedin.com/in/saeed-baharikhoob/)

---

Built with ❤️ using [Nx](https://nx.dev)
