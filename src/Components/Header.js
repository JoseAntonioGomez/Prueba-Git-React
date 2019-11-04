import React from 'react';
import logo from './logo.svg';
import './Header.css';
class Header extends React.Component{
constructor(){
    super();
    this.state={
    }
}
render(){
    return(
        <header className="container Header-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
}
}
export default Header;