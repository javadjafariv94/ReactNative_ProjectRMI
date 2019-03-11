import React from 'react';
import {View , Text ,Button} from 'react-native';
import Filter from './Filter';
import Album from './component/album/album';
//import NewAlbum from './image-view/newAlbum';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Zoom from './image-view/zoom';
import ModalExample from './image-view/modal';
import Pan from './image-view/pan';
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
        
        <Button
          title="Go to News"
          onPress={() => {
            this.props.navigation.navigate('Filter')
          }}
        />

         <Button
          title="Go to Album"
          onPress={() => {
            this.props.navigation.navigate('Album')
          }}
        /> 

        <Button
          title="Go to New Album"
          onPress={() => {
            this.props.navigation.navigate('NewAlbum')
          }}
        /> 

       <Button
          title="Go to New Album Zoom"
          onPress={() => {
            this.props.navigation.navigate('Zoom')
          }}
        /> 
        <Button
          title="Modal"
          onPress={() => {
            this.props.navigation.navigate('ModalExample')
          }}
        /> 

        <Button
          title="Pan"
          onPress={() => {
            this.props.navigation.navigate('Pan')
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
    Filter :  { screen : Filter},
    Album :   { screen : Album},
  //  NewAlbum :{ screen : NewAlbum}
    Zoom :    { screen : Zoom},
    ModalExample :   {screen : ModalExample},
    Pan :{screen : Pan}

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