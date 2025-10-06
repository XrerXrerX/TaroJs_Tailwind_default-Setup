# 📚 Complete Installation Guide

This guide provides step-by-step instructions for setting up Taro projects with and without Tailwind CSS.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

#### For Linux/macOS:
```bash
# Make script executable
chmod +x install.sh

# Run installation script
./install.sh
```

#### For Windows:
```cmd
# Run installation script
install.bat
```

### Option 2: Manual Setup

## 📋 Prerequisites

### Required Software
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Platform-Specific Requirements

#### For Mini Program Development:
- **WeChat Mini Program**: WeChat Developer Tools
- **Alipay Mini Program**: Alipay Mini Program Developer Tools
- **QQ Mini Program**: QQ Mini Program Developer Tools
- **ByteDance Mini Program**: ByteDance Mini Program Developer Tools
- **Baidu Mini Program**: Baidu Mini Program Developer Tools
- **JD Mini Program**: JD Mini Program Developer Tools

## 🛠️ Manual Installation Steps

### Step 1: Install Taro CLI

```bash
# Install globally
npm install -g @tarojs/cli

# Or using yarn
yarn global add @tarojs/cli

# Verify installation
taro --version
```

### Step 2: Create New Project

```bash
# Create project with Redux template
taro init my-taro-app

# Navigate to project directory
cd my-taro-app
```

### Step 3: Install Dependencies

```bash
# Using yarn (recommended)
yarn install

# Or using npm
npm install
```

### Step 4: Optional - Add Tailwind CSS

#### Install Tailwind CSS
```bash
yarn add tailwindcss postcss autoprefixer --dev
```

#### Initialize Configuration
```bash
npx tailwindcss init
```

#### Create PostCSS Config
Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### Update Tailwind Config
Update `tailwind.config.js`:
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

#### Add Tailwind Directives
Update `src/app.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Configure Taro
Update `config/index.ts`:
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

## 🚀 Development Setup

### Start Development Server

```bash
# H5 Development (Web)
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

## 🔧 Platform-Specific Setup

### WeChat Mini Program

1. **Install WeChat Developer Tools**
   - Download from: https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
   - Install and login with WeChat account

2. **Configure Project**
   ```bash
   yarn dev:weapp
   ```
   - Open WeChat Developer Tools
   - Import project from `dist/` folder
   - Configure AppID in project settings

### Alipay Mini Program

1. **Install Alipay Developer Tools**
   - Download from: https://opendocs.alipay.com/mini/ide/download
   - Install and login with Alipay account

2. **Configure Project**
   ```bash
   yarn dev:alipay
   ```
   - Open Alipay Developer Tools
   - Import project from `dist/` folder

### QQ Mini Program

1. **Install QQ Developer Tools**
   - Download from: https://q.qq.com/qqweb/qqdevtools/
   - Install and login with QQ account

2. **Configure Project**
   ```bash
   yarn dev:qq
   ```
   - Open QQ Developer Tools
   - Import project from `dist/` folder

## 🎨 Tailwind CSS Setup

### Basic Configuration

After installing Tailwind CSS, you need to configure it for Taro:

#### 1. Update `tailwind.config.js`
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

#### 2. Update `config/index.ts`
```typescript
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'vite'> = {
    // ... other config
    
    mini: {
      postcss: {
        tailwindcss: {
          enable: true,
          config: {}
        },
        // ... other config
      },
    },
    
    h5: {
      postcss: {
        tailwindcss: {
          enable: true,
          config: {}
        },
        // ... other config
      },
    },
  }
  
  // ... rest of config
})
```

#### 3. Add Tailwind Directives
Update `src/app.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Testing Tailwind CSS

Create a test component to verify Tailwind CSS is working:

```tsx
// src/pages/index/index.tsx
import { View, Text, Button } from '@tarojs/components'

function Index() {
  return (
    <View className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <View className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <Text className="text-2xl font-bold text-center mb-4">Hello Tailwind!</Text>
        <Text className="text-gray-600 text-center">
          Tailwind CSS is working! 🎉
        </Text>
      </View>
      
      <Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        <Text className="text-white font-bold">Click Me</Text>
      </Button>
    </View>
  )
}

export default Index
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. Taro CLI not found
```bash
# Reinstall Taro CLI
npm uninstall -g @tarojs/cli
npm install -g @tarojs/cli

# Or using yarn
yarn global remove @tarojs/cli
yarn global add @tarojs/cli
```

#### 2. Node.js version issues
```bash
# Check Node.js version
node --version

# Install Node Version Manager (nvm)
# Linux/macOS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Windows
# Download from: https://github.com/coreybutler/nvm-windows
```

#### 3. Tailwind CSS not working
1. Check if Tailwind directives are in `src/app.css`
2. Verify PostCSS configuration
3. Restart development server
4. Check if classes are in content paths

#### 4. Build errors
1. Clear cache: `yarn cache clean`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && yarn install`
3. Check TypeScript configuration
4. Verify Taro configuration

#### 5. Mini Program issues
1. Test on actual devices, not just simulator
2. Check developer tools console
3. Verify platform-specific configurations
4. Check if all required developer tools are installed

### Debug Commands

```bash
# Check Taro version
taro --version

# Check build output
yarn build:h5 --verbose

# Check dependencies
yarn list

# Clear cache
yarn cache clean

# Check Node.js version
node --version

# Check npm/yarn version
npm --version
yarn --version
```

## 📚 Additional Resources

### Documentation
- **README.md** - Full setup guide with Tailwind CSS
- **README_TARO_ONLY.md** - Basic Taro setup without Tailwind CSS
- **TAILWIND_SETUP.md** - Detailed Tailwind CSS setup
- **TAILWIND_QUICK_REFERENCE.md** - Quick reference for Tailwind CSS
- **QQ_MINI_PROGRAM_GUIDE.md** - QQ Mini Program specific guide

### External Resources
- [Taro Documentation](https://taro-docs.jd.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Redux Documentation](https://react-redux.js.org/)
- [WeChat Mini Program Documentation](https://developers.weixin.qq.com/miniprogram/dev/)
- [Alipay Mini Program Documentation](https://opendocs.alipay.com/mini)

## 🎉 Success!

Once you've completed the setup, you should be able to:

1. ✅ Start development server: `yarn dev:h5`
2. ✅ Build for production: `yarn build:h5`
3. ✅ Use Tailwind CSS classes (if installed)
4. ✅ Develop for multiple platforms

**Happy coding with Taro! 🚀✨**
