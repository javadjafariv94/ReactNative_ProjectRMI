import React, {Component} from 'react';
import {View , Text} from 'react-native';
import HeaderInput from './component/headerInput';
import styles from './component/style';
import JSON from './json/db.json';
import NewsList from './component/news_list';

export default class Filter extends Component {

  state = {
    news :JSON ,
    filtered :[],
    keyEnter : '',
    keyEnter2: ''
  }
  static navigationOptions = {
    title : 'News with filter',
    headerStyle :{
      backgroundColor : 'blue',
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight :'bold',
    },
  };


  getkeyword = (event) => {
    this.state.keyEnter = event;
    console.log(this.state.keyEnter);
    console.log(this.state.news);

    filtered = this.state.news.filter((item) => {
      return (item.title.indexOf(this.state.keyEnter) >-1)&&
             (item.news.indexOf(this.state.keyEnter2) >-1)
    });
    this.setState({filtered});

    console.log("filter1..............",filtered);
  }

  getkeyword2 = (event2) => {
    this.state.keyEnter2 = event2;
    console.log(this.state.keyEnter2);
    console.log(this.state.news);

    filtered = this.state.news.filter((item) => {
      return (item.title.indexOf(this.state.keyEnter) >-1)&&
             (item.news.indexOf(this.state.keyEnter2) >-1)
    });
    this.setState({filtered});

    console.log("filter2..............",filtered);
  }


  // getkeyword2 = (event) => {
  //   let keyEnter = event;
  //   console.log(keyEnter);
  //   console.log(this.state.news);

  //   filtered = this.state.news.filter((item) => {
  //     return item.title.indexOf(keyEnter) >-1
  //   });
  //   this.setState({filtered});

  //   console.log(filtered);
  // }

  render() {
    let newsWhole = this.state.news;
    let newsFiltered = this.state.filtered; 

    return (
      <View style={styles.container}>

        <HeaderInput getmykeyword ={this.getkeyword} getmykeyword2 ={this.getkeyword2}/>
        <NewsList listNews = { newsFiltered.length === 0 ? newsWhole: newsFiltered }>
          The News are :
        </NewsList>
        
      </View>
    );
  }
}

