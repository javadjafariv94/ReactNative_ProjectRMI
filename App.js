import React from 'react';
import {View , Text ,Button} from 'react-native';
import Filter from './Filter';
import { createStackNavigator, createAppContainer ,StackActions ,NavigationActions} from "react-navigation";
class HomeScreen extends React.Component {
  render(){
    return(
     <View style = {{flex : 1, alignItems :'center' ,justifyContent :'center'}} >
       <Text> WellCome To My Project </Text>

       <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />

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
    Home :    { screen : HomeScreen},
    Details : { screen : DetialScreen}
  },
  {
    initialRouteName : 'Home'
  }
);

export default createAppContainer(AppNavigator);