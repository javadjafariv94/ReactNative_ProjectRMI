import React from 'react';
import {View , FlatList} from 'react-native';
import Article from './article';

export default class Articles extends React.Component {

renderFlatlistArticle  (article) {

  return <Article image={article.imageUrl} title={article.title} body={article.body} />
  
}


  render(){
    return (
       <View>
         <FlatList             
          data ={this.props.articles}
          renderItem={({ item }) =>  this.renderFlatlistArticle(item)}
          
         />
       </View> 

    );
  }
}