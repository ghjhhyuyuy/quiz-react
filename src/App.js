import React from 'react';
import './App.less';
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
import Mail from './components/Mail';
import Order from './components/Order';
import AddProduct from './components/AddProduct';
import { HomeOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <header>
          <button className="headDiv">
            <HomeOutlined style={{ color: 'white' }}/>
            <NavLink exact to='/' id="link" >商城</NavLink>
          </button>
          <button className="headDiv">
          <ShoppingCartOutlined style={{ color: 'white' }}/>
            <NavLink id="link"  to='/order'>订单</NavLink>
          </button>
        <button className="headDiv">
        <PlusOutlined style={{ color: 'white' }}/>
          <NavLink id="link"  to='/add'> 添加商品</NavLink>
        </button>
        </header>
        <Route exact path="/" component={Mail}></Route>
        <Route exact path="/order" component={Order}></Route>
        <Route exact path="/add" component={AddProduct}></Route>
        </BrowserRouter>
    </div>
  );
};

export default App;