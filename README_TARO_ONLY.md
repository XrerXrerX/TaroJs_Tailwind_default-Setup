# 🚀 Taro Project - Basic Setup

A cross-platform development framework for building mini programs and H5 applications.

## 📋 Prerequisites

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

- ✅ **H5** - Web applications
- ✅ **WeChat Mini Program** - WeChat ecosystem
- ✅ **Alipay Mini Program** - Alipay ecosystem
- ✅ **QQ Mini Program** - QQ ecosystem
- ✅ **ByteDance Mini Program** - ByteDance ecosystem
- ✅ **Baidu Mini Program** - Baidu ecosystem
- ✅ **JD Mini Program** - JD ecosystem

## 🔧 Project Structure

```
src/
├── actions/          # Redux actions
├── reducers/         # Redux reducers
├── store/           # Redux store configuration
├── pages/           # Application pages
│   └── index/       # Home page
├── app.tsx          # App component
├── app.css          # Global styles
└── app.config.ts    # App configuration
```

## 🎨 Basic Styling

### Using CSS Classes

```tsx
import { View, Text, Button } from '@tarojs/components'
import './index.css'

function MyComponent() {
  return (
    <View className="container">
      <Text className="title">Hello Taro!</Text>
      <Button className="btn">Click Me</Button>
    </View>
  )
}
```

### CSS Example

```css
/* src/pages/index/index.css */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.btn {
  background-color: #007aff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
}
```

## 🛠️ Troubleshooting

### Common Issues

#### Build errors
1. Ensure all dependencies are installed
2. Check TypeScript configuration
3. Verify Taro configuration

#### Development server not starting
1. Check if port is available
2. Clear cache: `yarn cache clean`
3. Restart development server

#### Mini Program issues
1. Test on actual devices, not just simulator
2. Check developer tools console
3. Verify platform-specific configurations

### Debug Commands

```bash
# Check build output
yarn build:h5 --verbose

# Check dependencies
yarn list

# Clear cache
yarn cache clean

# Check Taro version
taro --version
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

# 4. Start development
yarn dev:h5
```

**Happy coding with Taro! 🚀**
