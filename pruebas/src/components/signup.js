import React, {Component} from 'react';
import './login.css';
import logo from './logo.svg';
import Login,{login} from './login';


function LoadLogin(props){
    return (
  
        <Login/>
        
        );    
}

function LoadSignup(props){

    if(props.acceso){
      return(<loadLogin/>);
    }
    else{

      return(
  
          <div className="signup">
          <div className="signup-header">
              <img src={logo} className="App-logo" alt="logo" />
                <h2>SIGN IN</h2>    
          </div>
          <div className="signup-body">
          <form name="form2">
            <label>Name</label>
            <input type="text" name="names" onChange={props.saveText}/>
          <br/>
          <label>Surnames</label>
          <input type="text" name="surnames"onChange={props.saveText} />
        <br/>
        <label>Username</label>
          <input type="text" name="username" onChange={props.saveText}/>
        <br/>
        <label>Email</label>
          <input type="text" name="email" onChange={props.saveText}/>
        <br/>
        <label>Password</label>
        <input type="password" name="password" onChange={props.saveText}/>
        <br/>
        <label>Confirm Password</label>
        <input type="password" name="confirm" onChange={props.saveText}/>
        <br/>
            <input type="submit" value="Submit" onClick={e => props.sendSign(e)}/>
        </form>
        </div>
        <div className="signup-footer">
           <a href="#" onClick={props.loadLogin}>
              Cancel
            </a>
        </div>
      </div>
  
      );


    }




}


class signup extends Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            success:false,
            message:'',
            names:"",
            surnames:"",
            username:"",
            email:"",
            password:"",
            confirm:"",
            clicked:true,
        }
        this.handleSignupClick= this.handleSignupClick.bind(this);  
        this.ChangeHandler=this.ChangeHandler.bind(this);
        this.sendSignup=this.sendSignup.bind(this);
        this.itsCreated=this.itsCreated.bind(this);
    }

    itsCreated(){



    }

    sendSignup(event){

  
      event.preventDefault();
      this.setState({loading:true})    
      let formData = new FormData();
      formData.append('names', this.state.names)
      formData.append('surnames', this.state.surnames)
      formData.append('username', this.state.username)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      formData.append('confirm', this.state.confirm)

       // var url = 'http://php_p1:4500/signup.php'; 
       // var url = 'http://192.168.208.5:4500/signup.php'; 
      // var url = 'http://172.19.0.3:4500/signup.php';
      var url = '/signup.php';


      fetch(url, {   

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

      this.setState({success:res.success});
      this.setState({message:res.message});
      this.setState({loading:false})
      console.log(this.state);
      alert(this.state.message);

     }))
     .catch(error => {
        var res={success: "false", message: "Error in fetch"};
        this.setState({success:res.success});
        this.setState({message:res.message});
        this.setState({loading:false})       
        console.log(res);
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

    if(this.state.success){
      return(
      <LoadLogin/>
      )
    }

    else{

      return (
  
        <div>
            {this.state.clicked ?
              

                <LoadSignup loadLogin={this.handleSignupClick} saveText={this.ChangeHandler} sendSign={this.sendSignup} 
                acceso={this.state.success}/>:

              
            
              <LoadLogin/>}    
        </div>
      

    );

    }


    }
    
  
}

export default signup;

// this.state.access?
              
