# 📱 QQ Mini Program Development Guide

## 🚀 Quick Start untuk QQ Mini Program

### Development Command
```bash
# Start QQ Mini Program development
yarn dev:qq

# Build QQ Mini Program for production
yarn build:qq
```

## 🛠️ Setup QQ Mini Program

### 1. Install QQ Developer Tools
1. Download QQ Mini Program Developer Tools dari [official website](https://q.qq.com/qqweb/qqdevtools/)
2. Install dan setup developer account
3. Create project baru atau import existing project

### 2. Configure Project
```bash
# Pastikan project sudah dikonfigurasi untuk QQ
# Check project.config.json
```

### 3. Development Workflow
```bash
# 1. Start Taro development
yarn dev:qq

# 2. Open QQ Developer Tools
# 3. Import project dari folder dist/
# 4. Preview di simulator atau device
```

## 🎨 Tailwind CSS untuk QQ Mini Program

### Supported Features
- ✅ Layout utilities (flex, grid, positioning)
- ✅ Spacing (padding, margin)
- ✅ Colors (background, text, border)
- ✅ Typography (font-size, font-weight)
- ✅ Border radius
- ✅ Box shadow (limited)
- ✅ Opacity

### Limitations
- ❌ Complex animations
- ❌ Some CSS3 features
- ❌ Advanced transforms
- ❌ Some pseudo-classes

### Best Practices untuk QQ
```tsx
// ✅ Good - Simple and compatible
<View className="flex flex-col items-center p-4 bg-white rounded-lg">
  <Text className="text-lg font-bold text-center">Title</Text>
</View>

// ❌ Avoid - Complex features
<View className="transform rotate-45 hover:scale-110">
  <Text className="animate-pulse">Complex Animation</Text>
</View>
```

## 🔧 QQ-Specific Configuration

### Update project.config.json
```json
{
  "miniprogramRoot": "dist/",
  "projectname": "your-project-name",
  "description": "QQ Mini Program with Tailwind CSS",
  "appid": "your-qq-appid",
  "setting": {
    "urlCheck": false,
    "es6": true,
    "enhance": true,
    "postcss": true,
    "preloadBackgroundData": false,
    "minified": true,
    "newFeature": false,
    "coverView": true,
    "nodeModules": false,
    "autoAudits": false,
    "showShadowRootInWxmlPanel": true,
    "scopeDataCheck": false,
    "uglifyFileName": false,
    "checkInvalidKey": true,
    "checkSiteMap": true,
    "uploadWithSourceMap": true,
    "compileHotReLoad": false,
    "lazyloadPlaceholderEnable": false,
    "useMultiFrameRuntime": true,
    "useApiHook": true,
    "useApiHostProcess": true,
    "babelSetting": {
      "ignore": [],
      "disablePlugins": [],
      "outputPath": ""
    },
    "enableEngineNative": false,
    "useIsolateContext": true,
    "userConfirmedBundleSwitch": false,
    "packNpmManually": false,
    "packNpmRelationList": [],
    "minifyWXSS": true,
    "disableUseStrict": false,
    "minifyWXML": true,
    "showES6CompileOption": false,
    "useCompilerPlugins": false
  },
  "compileType": "miniprogram",
  "libVersion": "2.19.4",
  "appid": "your-qq-appid",
  "projectname": "your-project-name",
  "debugOptions": {
    "hidedInDevtools": []
  },
  "scripts": {},
  "staticServerOptions": {
    "baseURL": "",
    "servePath": ""
  },
  "isGameTourist": false,
  "condition": {
    "search": {
      "list": []
    },
    "conversation": {
      "list": []
    },
    "game": {
      "list": []
    },
    "plugin": {
      "list": []
    },
    "gamePlugin": {
      "list": []
    },
    "miniprogram": {
      "list": []
    }
  }
}
```

## 🎯 Development Tips

### 1. Testing Strategy
```bash
# Development flow
yarn dev:qq          # Start development
# Open QQ Developer Tools
# Import dist/ folder
# Test on simulator
# Test on real device via QQ app
```

### 2. Debugging
- Use QQ Developer Tools console
- Check network requests
- Monitor performance
- Test on different QQ versions

### 3. Performance Optimization
```tsx
// ✅ Optimize images
<Image 
  className="w-full h-48 object-cover"
  src="optimized-image.jpg"
  lazy-load
/>

// ✅ Use efficient layouts
<View className="flex flex-col">
  <View className="flex-1">Content</View>
</View>
```

## 📱 QQ Mini Program Features

### Supported Components
- View, Text, Image, Button
- ScrollView, Swiper
- Input, Textarea
- Picker, Radio, Checkbox
- Canvas, Map
- Video, Audio

### Tailwind Integration
```tsx
// Button dengan Tailwind
<Button 
  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
  onClick={handleClick}
>
  <Text className="text-white font-bold">Click Me</Text>
</Button>

// Card layout
<View className="bg-white rounded-lg shadow-lg p-4 mb-4">
  <Text className="text-xl font-bold mb-2">Card Title</Text>
  <Text className="text-gray-600">Card content</Text>
</View>
```

## 🚀 Deployment

### 1. Build Production
```bash
yarn build:qq
```

### 2. Upload to QQ
1. Open QQ Developer Tools
2. Import dist/ folder
3. Click "Upload" button
4. Fill version info
5. Submit for review

### 3. Version Management
- Use semantic versioning
- Test thoroughly before upload
- Keep changelog updated

## 🔧 Troubleshooting

### Common Issues
1. **Styling not applied**
   - Check if Tailwind CSS is properly configured
   - Restart development server
   - Clear cache in QQ Developer Tools

2. **Build errors**
   - Check TypeScript errors
   - Verify all dependencies installed
   - Check Taro configuration

3. **Performance issues**
   - Optimize images
   - Reduce bundle size
   - Use lazy loading

### Debug Commands
```bash
# Check build output
yarn build:qq --verbose

# Check dependencies
yarn list

# Clear cache
yarn cache clean
```

## 📚 Resources

- [QQ Mini Program Documentation](https://q.qq.com/wiki/)
- [QQ Developer Tools](https://q.qq.com/qqweb/qqdevtools/)
- [Taro QQ Platform Guide](https://taro-docs.jd.com/docs/next/platform/qq)

---

## 🎉 Ready to Develop!

Sekarang Anda siap untuk mengembangkan QQ Mini Program dengan Tailwind CSS!

```bash
# Start development
yarn dev:qq
```

Happy coding! 🚀✨
