import React from 'react';
import {View , Text ,Button} from 'react-native';
import Filter from './Filter';
import { createStackNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends React.Component {

  static navigationOptions = {
    title : 'Home',
    headerStyle :{
      backgroundColor : '#f4511e',
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight :'bold',
    },
  };

  render(){
    return(
     <View style = {{flex : 1, alignItems :'center' ,justifyContent :'center'}} >
       <Text> WellCome To My Project </Text>

       <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        />

      </View> 
    ) 
  }
}

class DetialScreen extends React.Component {
  static navigationOptions = {
    title : 'Details',
    headerStyle :{
      backgroundColor : 'blue',
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight :'bold',
    },
  };

  render(){
    return(
     <View style = {{flex : 1, alignItems :'center' ,justifyContent :'center'}} >
       <Text> DetailScreen </Text>
       <Text>Details 1 </Text>
        <Text>Details 2 </Text>
        <Text>Details 3 </Text>
        <Text>Details 4 </Text>

        <Button
         title ="Go To details .... again"
         onPress={() => 
           this.props.navigation.push('Details')
         }
        />

        <Button
          title = "Go to Home"
          onPress ={() =>
            this.props.navigation.navigate('Home')}
         />

         <Button 
         title = "Go back"
         onPress= { () => this.props.navigation.goBack()} 
         />   

     </View> 
    ) 
  }
}


const AppNavigator = createStackNavigator(
  {
    Home :    { screen : HomeScreen},
    Details : { screen : DetialScreen},
    
  },
  {
    initialRouteName : 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class  App extends React.Component{
  render(){
    return <AppContainer />
  }
}