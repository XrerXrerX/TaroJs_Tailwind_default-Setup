# 📚 Dokumentasi Tailwind CSS untuk Taro

## 🚀 Instalasi Tailwind CSS di Proyek Taro

### 1. Install Dependencies

```bash
# Menggunakan Yarn (Recommended)
yarn add tailwindcss postcss autoprefixer --dev

# Atau menggunakan NPM
npm install -D tailwindcss postcss autoprefixer
```

### 2. Initialize Tailwind CSS

```bash
# Menggunakan npx
npx tailwindcss init

# Atau menggunakan yarn
yarn exec tailwindcss init
```

### 3. Konfigurasi Files

#### `tailwind.config.js`
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

#### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. Konfigurasi Taro

#### Update `config/index.ts`
```typescript
// Untuk mini program
mini: {
  postcss: {
    pxtransform: {
      enable: true,
      config: {}
    },
    tailwindcss: {
      enable: true,
      config: {}
    },
    cssModules: {
      enable: false,
      config: {
        namingPattern: 'module',
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }
    }
  },
},

// Untuk H5
h5: {
  postcss: {
    autoprefixer: {
      enable: true,
      config: {}
    },
    tailwindcss: {
      enable: true,
      config: {}
    },
    cssModules: {
      enable: false,
      config: {
        namingPattern: 'module',
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }
    }
  },
}
```

### 5. Tambahkan Tailwind Directives

#### Update `src/app.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎨 Cara Penggunaan

### Basic Classes

```tsx
// Layout
<View className="flex flex-col items-center justify-center">
  <Text className="text-2xl font-bold text-center">Hello World</Text>
</View>

// Colors
<View className="bg-blue-500 text-white p-4 rounded-lg">
  <Text className="text-white">Blue Background</Text>
</View>

// Spacing
<View className="p-4 m-2 mb-4">
  <Text className="text-lg">Spaced Content</Text>
</View>
```

### Responsive Design

```tsx
<View className="w-full md:w-1/2 lg:w-1/3">
  <Text className="text-sm md:text-base lg:text-lg">Responsive Text</Text>
</View>
```

### State Variants

```tsx
<Button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white p-2 rounded">
  <Text className="text-white">Interactive Button</Text>
</Button>
```

## 📱 Platform Compatibility

### ✅ Supported Platforms
- **H5** - Full support
- **WeChat Mini Program** - Supported with limitations
- **Alipay Mini Program** - Supported with limitations
- **QQ Mini Program** - Supported with limitations
- **ByteDance Mini Program** - Supported with limitations
- **Baidu Mini Program** - Supported with limitations
- **JD Mini Program** - Supported with limitations

### ⚠️ Limitations for Mini Programs
- `preflight: false` - Disabled to avoid conflicts
- Some CSS properties may not work in mini programs
- Use `className` instead of `style` for better compatibility

## 🛠️ Development Commands

```bash
# Development H5
yarn dev:h5

# Development WeChat Mini Program
yarn dev:weapp

# Development Alipay Mini Program
yarn dev:alipay

# Development QQ Mini Program
yarn dev:qq

# Development ByteDance Mini Program
yarn dev:tt

# Development Baidu Mini Program
yarn dev:swan

# Development JD Mini Program
yarn dev:jd

# Build Commands
yarn build:h5         # Build H5
yarn build:weapp       # Build WeChat Mini Program
yarn build:alipay      # Build Alipay Mini Program
yarn build:qq          # Build QQ Mini Program
yarn build:tt          # Build ByteDance Mini Program
yarn build:swan        # Build Baidu Mini Program
yarn build:jd          # Build JD Mini Program
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

// Usage
<Card className="mb-4">
  <Text className="text-lg font-bold">Card Title</Text>
</Card>
```

### 3. Custom Utilities
```css
/* Add custom utilities in app.css */
@layer utilities {
  .mini-shadow {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .mini-rounded {
    border-radius: 8px;
  }
}
```

## 🔧 Troubleshooting

### Styling Not Applied
1. Check if Tailwind directives are in `app.css`
2. Verify PostCSS configuration
3. Restart development server
4. Check if classes are in content paths

### Build Errors
1. Ensure all dependencies are installed
2. Check TypeScript configuration
3. Verify Taro configuration

### Mini Program Issues
1. Use `preflight: false` in config
2. Test on actual devices, not just simulator
3. Check developer tools console

### QQ Mini Program Specific
1. Use QQ Developer Tools for testing
2. Some CSS properties may not work in QQ environment
3. Test on QQ mobile app for best results
4. Check QQ Mini Program documentation for limitations

## 📚 Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Taro Documentation](https://taro-docs.jd.com/)
- [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

## 🎨 Example Components

### Button Component
```tsx
const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-bold text-center"
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    danger: "bg-red-500 text-white hover:bg-red-700"
  }
  
  return (
    <Button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      <Text className="text-white">{children}</Text>
    </Button>
  )
}
```

### Card Component
```tsx
const Card = ({ title, children, className = "" }) => (
  <View className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
    {title && (
      <Text className="text-xl font-bold text-gray-800 mb-4">{title}</Text>
    )}
    {children}
  </View>
)
```

---

## 🎉 Selamat! Tailwind CSS sudah terintegrasi dengan sempurna di proyek Taro Anda!

Untuk memulai development, jalankan:
```bash
yarn dev:h5
```

Dan buka browser untuk melihat hasilnya! 🚀
