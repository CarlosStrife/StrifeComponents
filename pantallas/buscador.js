import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import ListaSelectorBuscador from './listaselectorbuscador'

export default class Buscador extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: ['apple', 'banana', 'cow', 'dex', 'zee', 'orange', 'air', 'bottle','apple','apple','apple','apple','apple','apple','apple','apple','apple','apple'],
      filtered: this.dataSource,
      searching: false,
      texto: '',
    }
  }


  onSearch = (text) => {
    if (text) {

      const temp = text.toLowerCase()

      const tempList = this.state.dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      
      this.setState({
                      searching: true,
                      filtered: tempList,
                      texto: text,
                    });
    }
    else {
      this.setState({
                      searching: false,
                      filtered: this.state.dataSource,
                      texto: text,
                    });
    }
  }

  cambiartexto = (text) => {
    text = text;
    this.setState({
      searching: false,
      texto: text,
    });
  }

  render() {   

    return (
    <View style={styles.container}>
      <TextInput
      value={this.state.texto}
      style={styles.textInput}
      placeholder="Buscar"
      placeholderTextColor='white'
      onFocus={() => this.setState({searching: true, filtered: this.state.dataSource})}
      onChangeText={this.onSearch}
      />
      {this.state.searching && <ListaSelectorBuscador onPress={() => this.setState({searching: false})} dataSource={this.state.filtered} cambiartexto={this.cambiartexto.bind(this)}/>}
    </View>
    )
  }
}
 
 
 const styles = StyleSheet.create({
   container: {
     alignItems: 'center',
   },
   textInput: {
     backgroundColor: '#BFBFBF',
     width: '80%',
     borderRadius: 5,
     height: 50,
     fontSize: 20,
     fontWeight: 'bold',
     paddingHorizontal: 10,
   },
 });