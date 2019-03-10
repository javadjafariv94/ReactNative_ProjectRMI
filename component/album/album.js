import React from 'react';
import {Text} from 'react-native';


export default  class Album extends React.Component {
  static navigationOptions = {
    title : 'Home',
    headerStyle :{
      backgroundColor : 'green',
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight :'bold',
    },
  };
  render(){
    return(
      <Text> Album </Text>
    )
  }

}