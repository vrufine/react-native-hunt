import React, { Component } from 'react'
import api from './../services/api'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

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

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View>
        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
