import React from 'react';
import {View,Text,FlatList} from 'react-native';
import styles from './style';
const PrintNews = (props) => {
    
    let arrNews=   props.arrayNews;
    return (
       
    <FlatList
        data = {arrNews}
        renderItem={({item}) => 
          {
            return( 
              <View>
                <Text style={styles.id}> {item.id}  </Text>
                <Text style={styles.logu}> {item.title}  </Text>
                <Text> {item.news}  </Text>
              </View>
            ) 
          }
        }    
        />)

}
export default PrintNews;
