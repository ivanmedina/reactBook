import React, { Component } from 'react';
import './App.css';
import Login, {login} from './components/login';
import Home, {home} from './components/home';





class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loading:false,
      access:'denied',
      message:'',
      username:"",
      password:"",
      clicked:true,

    }
  }




  render(){



    
    return (

      <div className="App">
        <header className="container">

            <section className="components">

            <Login/>


            </section>
        </header>
      </div>
    );

  }

}


export default App;
