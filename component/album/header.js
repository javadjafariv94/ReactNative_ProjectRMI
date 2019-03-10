import React , { Component } from 'react';
import { StyleSheet , View , Text} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerText}> Album </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerView : {
        backgroundColor : '#8befc3',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    headerText : {
        
        fontSize : 18,
        color : 'white'
    }
})