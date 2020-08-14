import React, {Component} from 'react';
import Product from './Product';
class Mail extends Component {
  state = {
    products:[
      {
        url: "img/kele.jpg",
        name: "可乐",
        price: 1
      },
      {
        url: "img/kele1.jpg",
        name: "可乐1",
        price: 1
      }
    ]
  }
  successCallback = (text) => {
    this.setState = {
      products:[
        {
          url: text.imgUrl,
        name: text.productName,
        price: text.price
        }
      ]
    }
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
          this.state.products.map(item => <Product 
            url={item.url} 
            name={item.name} 
            price={item.price} 
            key={item.name}/>)
        );
      }
}
export default Mail;