import React from 'react';
import {View , Text , Image , StyleSheet} from 'react-native';

export default class Article extends React.Component {

    render(){
      const { title , image ,body} =this.props;
      //const { image , title , body} = this.props;
      return (
          <View>
              <Image source={image}  style={styles.image} />
              <Text>{title}</Text>
              <Text>{body}</Text>
          </View>
      )
    }
}


const styles = StyleSheet.create({
    image :{
      width :'100%',
      height :120
    }
})