import React, {Component} from 'react';
import './login.css';
import logo from './logo.svg';
import Signup,{signup} from './signup';
import Home from './home';


function LoadSign(props){


  return (
  
    <Signup/>
    
    );
}




function LoadLogin(props){


  if(props.theAccess!='sucessful'){
    return (      

      <div className="login">
        <div className="login-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LOGIN</h2>    
        </div>
        <div className="login-body">
          <form>
          <label>Username</label>
          <input type="text" name="username" onChange={props.saveText}/>
          <br/>
          <label>Password</label>
          <input type="password" name="password" onChange={props.saveText}/>
          <br/>
          <input type="submit" value="Submit" onClick={e => props.sendLog(e)} />
          </form>
        </div>
        <div className="login-footer">
          <a href="#" onClick={props.loadSign}>
              Sign up
          </a>
        </div>

      </div>
    );

  }
  else{
    return(

      <Home/>

    );
  }

}
    
    
export default class login extends Component{
  
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
    this.handleSignupClick= this.handleSignupClick.bind(this);
    this.ChangeHandler=this.ChangeHandler.bind(this);
    this.sendLogin=this.sendLogin.bind(this);

  }
  



  async sendLogin(event){ //deberia tener await?
    event.preventDefault();
    this.setState({loading:true})    
    let formData = new FormData();
    formData.append('username', this.state.username)
    formData.append('password', this.state.password)
    
    var url = '/login.php';

    await fetch(url, {   

        method: 'POST',
        headers: 
        {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',//'text/plain',
            'Connection': 'keep-alive',
            'Origin':'localhost',
        },
        mode:'cors',
        Connection:'keep',
        body:formData,
        })
    .then(response => response.json()
    .then(res=>{

          this.setState({access:res.access});
          this.setState({message:res.message});
          this.setState({message:res.message});
          this.setState({loading:false});
          alert(this.state.message);
          console.log(res);
        }))
     .catch(error => {
      var res={access: false, message: error};
      this.setState({access:res.access});
      this.setState({username:res.username});
      this.setState({loading:false});         
      alert(this.state.message);
    }); 


  };
      
  handleSignupClick() {
  
    this.setState(state => ({

      clicked: !state.clicked
    }));

  }

  ChangeHandler(event){

    this.setState({
      [event.target.name]:event.target.value
    })



  }

  render(){

    
  return(
      <div>
      {!this.state.clicked ? 
        <LoadSign/>:
        (this.state.access=='successful'?
          <div><Home userState={this.state.username} /></div>:
          <LoadLogin
          loadSign={this.handleSignupClick}
          saveText={this.ChangeHandler}
          sendLog={this.sendLogin}
          theAccess={this.state.access}

          /> 
        )}



      

          


      </div>


  );

  }

  
}




