import React from 'react';
import {View , FlatList} from 'react-native';
import Article from './article';
import Header from './header';

export default class Articles extends React.Component {

renderFlatlistArticle  (article) {

  return <Article image={article.imageUrl} title={article.title} body={article.body} />
  
}
  

  render(){
    console.log("okey");
    //alert("wellcome");
    return (
       <View style={{backgroundColor : '#dbf4e1'}}>
         <FlatList             
          data ={this.props.articles}
          renderItem={({ item }) =>  this.renderFlatlistArticle(item)}
          keyExtractor={(item , index) => index}
          ListHeaderComponent={() => <Header />}
          numColumns={2}
          columnWrapperStyle={{ flexDirection: 'row' }}
          
         />
       </View> 

    );
  }
}