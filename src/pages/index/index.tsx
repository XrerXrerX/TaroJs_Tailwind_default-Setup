import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.css'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

class Index extends Component<IProps> {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        {/* Test Tailwind dengan styling yang lebih jelas */}
        <View className='bg-red-500 p-4 m-2 rounded-lg mb-4'>
          <Text className='text-white text-lg font-bold text-center'>
            🔴 Test Tailwind - Red Background
          </Text>
        </View>
        
        <View className='bg-blue-500 p-4 m-2 rounded-lg mb-4'>
          <Text className='text-white text-lg font-bold text-center'>
            🔵 Test Tailwind - Blue Background
          </Text>
        </View>
        
        <View className='bg-green-500 p-4 m-2 rounded-lg mb-4'>
          <Text className='text-white text-lg font-bold text-center'>
            🟢 Test Tailwind - Green Background
          </Text>
        </View>
        
        {/* Counter dengan styling Tailwind */}
        <View className='bg-yellow-200 p-4 m-2 rounded-lg mb-4'>
          <Text className='text-black text-2xl font-bold text-center'>
            Counter: {this.props.counter.num}
          </Text>
        </View>
        
        {/* Buttons dengan styling Tailwind */}
        <View className='flex flex-row gap-4 mb-4'>
          <Button 
            className='bg-purple-500 text-white p-2 rounded-lg' 
            onClick={this.props.add}
          >
            <Text className='text-white font-bold'>+</Text>
          </Button>
          <Button 
            className='bg-orange-500 text-white p-2 rounded-lg' 
            onClick={this.props.dec}
          >
            <Text className='text-white font-bold'>-</Text>
          </Button>
          <Button 
            className='bg-pink-500 text-white p-2 rounded-lg' 
            onClick={this.props.asyncAdd}
          >
            <Text className='text-white font-bold'>Async</Text>
          </Button>
        </View>
        
        <View className='bg-gray-800 p-4 m-2 rounded-lg'>
          <Text className='text-white text-lg text-center'>
            Hello, World with Tailwind CSS! 🎨
          </Text>
        </View>
      </View>
    )
  }
}

export default connect((state: any) => ({
  counter: state.counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))(Index)

