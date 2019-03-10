import React from 'react';
import {View , Text} from 'react-native';
import Filter from './Filter';
import { createStackNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends React.Component {
  render(){
    return(
     <View style = {{flex : 1, alignItems :'center' ,justifyContent :'center'}} >
       <Text> WellCome To My Project </Text>
     </View> 
    ) 
  }
}

class DetialScreen extends React.Component {
  render(){
    return(
     <View style = {{flex : 1, alignItems :'center' ,justifyContent :'center'}} >
       <Text> DetailScreen </Text>
     </View> 
    ) 
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail : DetialScreen
  },
  {
    initialRouteName : 'Home'
  }
);

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component { 
  render(){
    return <AppContainer/>
  }

}