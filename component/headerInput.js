import  React from 'react';
import {View,Text,TextInput,Image} from 'react-native';
import styles from './style';

const HeaderInput = (props) => {
  return (
    <View style={styles.header}>
        <Image style ={ 
          {justifyContent: 'center',
           alignItems: 'center'}} source={{
           uri: "https://facebook.github.io/react-native/img/favicon.png",
           width: 20, height: 20}} />
           {/* <Text style={styles.logu} > RMI Filter News</Text> */}

        <TextInput style={styles.TextInputStyle} 
          placeholder="Enter Title Search ..."
          placeholderTextColor="powderblue"
        onChangeText = {props.getmykeyword} />

        <TextInput style={styles.TextInputStyle} 
         placeholder="Enter Discription Search ..."
         placeholderTextColor="powderblue"
        onChangeText = {props.getmykeyword2} />
        
    </View>
    )
}

export default HeaderInput

