# 🚀 Taro Project with Tailwind CSS

A modern cross-platform development framework built with Taro and enhanced with Tailwind CSS for beautiful, responsive UI components.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

### 1. Install Taro CLI

```bash
# Install Taro CLI globally
npm install -g @tarojs/cli

# Or using yarn
yarn global add @tarojs/cli
```

### 2. Create New Taro Project

```bash
# Create new project with Redux template
taro init my-taro-app

# Navigate to project directory
cd my-taro-app
```

### 3. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn (recommended)
yarn install
```

## 🎨 Optional: Add Tailwind CSS

### Quick Setup (Recommended)

```bash
# Install Tailwind CSS and dependencies
yarn add tailwindcss postcss autoprefixer --dev

# Initialize Tailwind config
npx tailwindcss init
```

### Manual Configuration

#### 1. Create `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Disable features that don't work in mini programs
    preflight: false,
  }
}
```

#### 2. Create `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 3. Update `config/index.ts`

Add Tailwind CSS configuration to your Taro config:

```typescript
// For mini programs
mini: {
  postcss: {
    tailwindcss: {
      enable: true,
      config: {}
    },
    // ... other config
  },
},

// For H5
h5: {
  postcss: {
    tailwindcss: {
      enable: true,
      config: {}
    },
    // ... other config
  },
}
```

#### 4. Add Tailwind Directives

Update `src/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🚀 Development

### Start Development Server

```bash
# H5 Development
yarn dev:h5

# WeChat Mini Program
yarn dev:weapp

# Alipay Mini Program
yarn dev:alipay

# QQ Mini Program
yarn dev:qq

# ByteDance Mini Program
yarn dev:tt

# Baidu Mini Program
yarn dev:swan

# JD Mini Program
yarn dev:jd
```

### Build for Production

```bash
# Build H5
yarn build:h5

# Build WeChat Mini Program
yarn build:weapp

# Build Alipay Mini Program
yarn build:alipay

# Build QQ Mini Program
yarn build:qq

# Build ByteDance Mini Program
yarn build:tt

# Build Baidu Mini Program
yarn build:swan

# Build JD Mini Program
yarn build:jd
```

## 📱 Supported Platforms

- ✅ **H5** - Full Tailwind CSS support
- ✅ **WeChat Mini Program** - Supported with limitations
- ✅ **Alipay Mini Program** - Supported with limitations
- ✅ **QQ Mini Program** - Supported with limitations
- ✅ **ByteDance Mini Program** - Supported with limitations
- ✅ **Baidu Mini Program** - Supported with limitations
- ✅ **JD Mini Program** - Supported with limitations

## 🎨 Using Tailwind CSS

### Basic Example

```tsx
import { View, Text, Button } from '@tarojs/components'

function MyComponent() {
  return (
    <View className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <View className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <Text className="text-2xl font-bold text-center mb-4">Hello Tailwind!</Text>
        <Text className="text-gray-600 text-center">
          Beautiful UI with Tailwind CSS
        </Text>
      </View>
      
      <Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        <Text className="text-white font-bold">Click Me</Text>
      </Button>
    </View>
  )
}
```

### Common Tailwind Classes

```tsx
// Layout
className="flex flex-col items-center justify-center"

// Spacing
className="p-4 m-2 mb-4"

// Colors
className="bg-blue-500 text-white"

// Typography
className="text-2xl font-bold text-center"

// Border & Radius
className="rounded-lg border-2"

// Shadow
className="shadow-lg"
```

## 🔧 Project Structure

```
src/
├── actions/          # Redux actions
├── reducers/         # Redux reducers
├── store/           # Redux store configuration
├── pages/           # Application pages
│   └── index/       # Home page
├── app.tsx          # App component
├── app.css          # Global styles + Tailwind directives
└── app.config.ts    # App configuration
```

## 📚 Documentation

- **Full Setup Guide**: `TAILWIND_SETUP.md`
- **Quick Reference**: `TAILWIND_QUICK_REFERENCE.md`
- **QQ Mini Program Guide**: `QQ_MINI_PROGRAM_GUIDE.md`

## 🛠️ Troubleshooting

### Common Issues

#### Tailwind CSS not working
1. Check if Tailwind directives are in `src/app.css`
2. Verify PostCSS configuration
3. Restart development server
4. Check if classes are in content paths

#### Build errors
1. Ensure all dependencies are installed
2. Check TypeScript configuration
3. Verify Taro configuration

#### Mini Program issues
1. Use `preflight: false` in config
2. Test on actual devices, not just simulator
3. Check developer tools console

### Debug Commands

```bash
# Check build output
yarn build:h5 --verbose

# Check dependencies
yarn list

# Clear cache
yarn cache clean
```

## 🎯 Best Practices

### 1. Use Utility Classes
```tsx
// ✅ Good
<View className="bg-blue-500 p-4 rounded-lg">
  <Text className="text-white font-bold">Content</Text>
</View>

// ❌ Avoid inline styles when possible
<View style={{backgroundColor: 'blue', padding: 16}}>
  <Text style={{color: 'white', fontWeight: 'bold'}}>Content</Text>
</View>
```

### 2. Component Organization
```tsx
// Create reusable styled components
const Card = ({ children, className = "" }) => (
  <View className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
    {children}
  </View>
)
```

### 3. Responsive Design
```tsx
<View className="w-full md:w-1/2 lg:w-1/3">
  <Text className="text-sm md:text-base lg:text-lg">Responsive Text</Text>
</View>
```

## 📦 Dependencies

### Core Dependencies
- `@tarojs/taro` - Taro framework
- `@tarojs/components` - Taro components
- `@tarojs/react` - React integration
- `react` - React library
- `react-redux` - State management

### Development Dependencies
- `@tarojs/cli` - Taro CLI
- `@tarojs/vite-runner` - Vite build runner
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework (optional)
- `postcss` - CSS processor
- `autoprefixer` - CSS autoprefixer

## 🚀 Deployment

### H5 Deployment
1. Build: `yarn build:h5`
2. Deploy `dist/` folder to your web server
3. Configure your web server for SPA routing

### Mini Program Deployment
1. Build: `yarn build:weapp` (or other platform)
2. Open respective developer tools
3. Import `dist/` folder
4. Upload and submit for review

## 📞 Support

- [Taro Documentation](https://taro-docs.jd.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Redux Documentation](https://react-redux.js.org/)

## 📄 License

This project is licensed under the MIT License.

---

## 🎉 Quick Start

```bash
# 1. Install Taro CLI
npm install -g @tarojs/cli

# 2. Create project
taro init my-taro-app
cd my-taro-app

# 3. Install dependencies
yarn install

# 4. Optional: Add Tailwind CSS
yarn add tailwindcss postcss autoprefixer --dev
npx tailwindcss init

# 5. Start development
yarn dev:h5
```

**Happy coding with Taro and Tailwind CSS! 🚀✨**
