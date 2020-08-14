import React, {Component} from 'react';
class Product extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.url}></img>
                <span className="name" >{this.props.name}</span>
                <span>单价：{this.props.price}元/瓶</span>
            </div>
        );
      }
}
export default Product;