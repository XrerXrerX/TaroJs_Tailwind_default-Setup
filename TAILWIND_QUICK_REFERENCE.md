# 🚀 Tailwind CSS Quick Reference untuk Taro

## 📦 Instalasi Cepat

```bash
# 1. Install dependencies
yarn add tailwindcss postcss autoprefixer --dev

# 2. Initialize config
npx tailwindcss init

# 3. Update config/index.ts (sudah dilakukan)
# 4. Update src/app.css dengan @tailwind directives (sudah dilakukan)
```

## 🎨 Classes yang Sering Digunakan

### Layout
```tsx
className="flex flex-col"           // Flexbox column
className="flex flex-row"           // Flexbox row
className="items-center"           // Center items
className="justify-center"         // Center content
className="w-full h-full"          // Full width/height
```

### Spacing
```tsx
className="p-4"                    // Padding all sides
className="m-2"                    // Margin all sides
className="px-4 py-2"              // Padding x and y
className="mb-4 mt-2"              // Margin bottom and top
```

### Colors
```tsx
className="bg-blue-500"            // Background blue
className="text-white"            // Text white
className="text-gray-600"         // Text gray
className="border-gray-300"       // Border gray
```

### Typography
```tsx
className="text-lg"                // Large text
className="text-2xl"              // Extra large text
className="font-bold"             // Bold font
className="text-center"           // Center text
```

### Border & Radius
```tsx
className="rounded-lg"            // Large border radius
className="rounded-full"          // Full border radius
className="border"                 // Border
className="border-2"              // 2px border
```

### Shadow & Effects
```tsx
className="shadow-lg"              // Large shadow
className="shadow-md"             // Medium shadow
className="opacity-50"            // 50% opacity
```

## 🎯 Contoh Penggunaan

### Button
```tsx
<Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
  <Text className="text-white font-bold">Click Me</Text>
</Button>
```

### Card
```tsx
<View className="bg-white rounded-lg shadow-lg p-6 mb-4">
  <Text className="text-xl font-bold mb-2">Card Title</Text>
  <Text className="text-gray-600">Card content goes here</Text>
</View>
```

### Layout Container
```tsx
<View className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <Text className="text-2xl font-bold text-center">Welcome</Text>
</View>
```

## 📱 Platform-Specific Notes

### H5 (Web)
- Full Tailwind support
- All classes work perfectly

### Mini Programs
- Use `preflight: false` in config
- Some CSS properties may not work
- Test on actual devices

## 🚀 Development Commands

```bash
# Start development
yarn dev:h5          # H5 development
yarn dev:weapp       # WeChat Mini Program
yarn dev:alipay      # Alipay Mini Program
yarn dev:qq          # QQ Mini Program
yarn dev:tt          # ByteDance Mini Program
yarn dev:swan        # Baidu Mini Program
yarn dev:jd          # JD Mini Program

# Build for production
yarn build:h5         # Build H5
yarn build:weapp      # Build WeChat Mini Program
yarn build:alipay     # Build Alipay Mini Program
yarn build:qq         # Build QQ Mini Program
yarn build:tt         # Build ByteDance Mini Program
yarn build:swan       # Build Baidu Mini Program
yarn build:jd         # Build JD Mini Program
```

## 🔧 Troubleshooting

### Styling tidak muncul?
1. Restart development server
2. Check `src/app.css` has Tailwind directives
3. Verify `config/index.ts` has tailwindcss config

### Build error?
1. Check all dependencies installed
2. Verify PostCSS configuration
3. Check TypeScript errors

---

**Happy coding with Tailwind CSS! 🎨✨**
