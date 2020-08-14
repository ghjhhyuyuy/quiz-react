import React, {Component} from 'react';
import Product from './Product';
class Mail extends Component {
  state = {
    products:[

    ]
  }
  successCallback = (text) => {
    text = JSON.parse(text);
    this.setState({
      products: text
    })
  }
  componentDidMount(){
    const url = "http://127.0.0.1:8080/products"
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        this.successCallback(xhr.responseText);
      } 
    };
    xhr.send();
  }
    render() {
        return (
          this.state.products?.map(item => <Product 
            url={item.imgUrl} 
            name={item.productName} 
            price={item.price} 
            key={item.name}/>)
        );
      }
}
export default Mail;