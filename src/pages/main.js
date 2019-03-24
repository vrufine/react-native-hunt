import React, { Component } from 'react'
import api from './../services/api'
import { View, Text } from 'react-native'

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  }

  state = {
    docs: []
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const res = await api.get('/products')
    const { docs } = res.data
    this.setState({
      docs
    })
  }

  render() {
    return (
      <View>
        <Text>Página Main</Text>
        {
          this.state.docs.map(product => <Text key={product._id}>- {product.title}</Text>)
        }
      </View>
    )
  }
}
