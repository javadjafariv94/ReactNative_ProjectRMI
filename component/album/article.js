import React from 'react';
import {View , Text , Image , StyleSheet} from 'react-native';

export default class Article extends React.Component {

    render(){
      const { title , image ,body} =this.props;
      //const { image , title , body} = this.props;
      return (
          <View style={styles.container}>
              <Image source={image}  style={styles.image} />

              <View style={{ padding : 10}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                    {/* numberOfLines={5} */}
              </View>
              
          </View>
      )
    }
}


const styles = StyleSheet.create({
  container :{
    flex:0.5,
    margin:5,
    flex : .5,
    margin: 5,
    backgroundColor : 'white',
    elevation : 1,
    shadowColor : '#000',
    shadowOffset : { width : 0 , height: 20},
    shadowOpacity : .2,
  },
    image :{
      width :'100%',
      height :120
    },
    title : {
      fontSize : 18,
  },
  body : {
      fontSize : 12
  }
})