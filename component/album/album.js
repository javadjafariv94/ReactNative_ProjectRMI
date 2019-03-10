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
            title : 'React Native',
            imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
            body :'Discription 1' 
            
        },
        {
            title : 'webpack',
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
            {
              title : 'React Native2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
              body :'Discription 7' 
              
          },
          {
              title : 'webpack2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/27/webpack.jpg'},
              body :'Discription 8'
          },
          {
              title : 'Angular Cli2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/26/angular-1.png'},
              body : 'Discription 9'
          },
          {
              title : 'laravel2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
              body :'Discription 10'
              },
          {
              title : 'Redux2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
              body : 'Discription 11'
               },
          {
              title : 'php2',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/oop-cover-1.jpg'},
              body :'Discription 12' 
              },
          {
              title : 'laravel3',
              imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
              body :'Discription 10'
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