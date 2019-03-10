import React from 'react';
import {View,Text,FlatList} from 'react-native';
import PrintNews from './newslist_item';

const NewsList = (props) => {

      console.log("newslist Props" , props.listNews);
      let arr = props.listNews;
      console.log("arr",arr);
  return(
      
    <View>
      {/* <Text>{props.children}</Text>
      <Text>________________</Text>
       */}
      <PrintNews arrayNews={arr}/>
     
    </View> 
); 
}
export default NewsList;