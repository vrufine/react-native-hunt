import React, { Component } from 'react'
import api from './../services/api'
import { View, Text } from 'react-native'

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const res = await api.get('/products')
    const { docs } = res.data
  }

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    )
  }
}
