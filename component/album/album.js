import React from 'react';
import {Text} from 'react-native';
import Articles from './articles';


export default  class Album extends React.Component {
  static navigationOptions = {
    title : 'Album',
    headerStyle :{
      backgroundColor : 'green',
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight :'bold',
    },
  };

  componentWillMount() {
   
    this.setState({
      articles : [
        {
            title : ' React Native',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
            body :'Discription 1' 
            
        },
        {
            title : ' webpack',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/27/webpack.jpg'},
            body :'Discription 2'
        },
        {
            title : 'Angular Cli',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/26/angular-1.png'},
            body : 'Discription 3'
        },
        {
            title : 'laravel',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
            body :'Discription 4'
            },
        {
            title : 'Redux',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
            body : 'Discription 5'
             },
        {
            title : 'php',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/oop-cover-1.jpg'},
            body :'Discription 6' 
            },
          ]


  });

  }


  render(){
    return(
      <Articles articles={this.state.articles}/>
    )
  }

}