import { Modal ,View,Text } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React from 'react';
// const images = [{
//     // Simplest usage.
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance

//     // You can pass props to <Image />.
//     props: {
//         // headers: ...
        
//     }
// }, {
//     props: {
//         // Or you can set source directory.
       
//           source: require('../assets/icon.png')
//           //source: require('../assets/spb.jpg')
//     }
// },{
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'  
// }


// ]
const articles = [
          
        { url : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
        { url : 'https://roocket.ir/public/image/2017/7/27/webpack.jpg'},
        { url : 'https://roocket.ir/public/image/2017/7/26/angular-1.png'},
        { url : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
        { url : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
        { url : 'https://roocket.ir/public/image/2017/6/13/oop-cover-1.jpg'},
        { url : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
        { url : 'https://roocket.ir/public/image/2017/7/27/webpack.jpg'},
        { url : 'https://roocket.ir/public/image/2017/7/26/angular-1.png'},
        { url : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
        { url : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
        { url : 'https://roocket.ir/public/image/2017/6/13/oop-cover-1.jpg'},
        { url : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
      
      ]

export default class Zoom extends React.Component {

    render(){
        return(
                
            //<Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={articles}/>
           //</Modal>

        
        )
    }
}





// export default class Zoom extends React.Component {
//     render() {
//         return (
//             <Modal visible={true} transparent={true}>
//                 <ImageViewer imageUrls={images}/>
//             </Modal>
//         )
//     }
// }