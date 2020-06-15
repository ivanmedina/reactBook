import React, { Component, StyleSheet } from 'react';
import './home.css';
import logo from './logo.svg';
import Login,{login} from './login';


function LoadLogin(props){
    return (
  
        <Login/>
        
        );    
}



function EmptyP(props){


    return(

        <div className="posts-empty"> 
            <p>NO HAY POSTS</p>
        </div>


    );

}

function Post(props){
    

    return(
        
        <div className="post" key={props.post.key}>
            <div className='post-user'>{props.post.username}</div>
            <div className='post-date'>{props.post.posted}</div>
            <div className='post-post'>{props.post.post}</div>
        </div>

    );
}


function Posts(props){


    // var url = 'http://localhost:4500/posts.php';


    const data=props.dat;

    
    if(data==void(0) || data.length<1)
    {
        return (
            <div className="div-post-div">
                <EmptyP/>
            </div>            
        );
    }

    
    
    return(    
        
        <div className="post-div">
        {data.map(p => <Post post={p} key={p.id}/>)}
        
        </div>
        


    );
}

function LoadHome(props){

    return(
        <div className="home">
        <div className="home-header">
          <h2>ReactBook</h2>
          <img src={logo} className="App-logo" alt="logo" />   

        </div>
        <div className="home-body">
            <div className="home-body-header"> 
                <div><a href='#' onClick={e => props.clickLogout(e)}>Log out</a></div> 

           </div>
            <div className="home-body-newpost"> 
                <div className="newpost">           
                        <textarea  rows="6" cols="30" className="newpost-area" name="postArea" onChange={e=>props.handlerArea(e)}/>
                        <div className="newpost-options">
                            <div><button type="button" name="postB"  onClick={e=>props.handlerPost(e)}>Post</button ></div> 
                            <div><button type="button" name="clearB" onClick={e=>props.handlerClear(e)}>Clear</button></div>                    
                        </div>
                </div> 
            </div>

                <Posts dat={props.datas}/>


        </div>
        <div className="home-footer">

        </div>
      </div>
);

}







export default class home extends Component {
  

    constructor(props){
        super(props);
        this.state={
          
          loading:false,
          access:'denied',
          post:'',
          username:props.userState,
          posts:[],      
          clicked:true,
          logoutB:false,
          
        }
        this.handlerClearClick= this.handlerClearClick.bind(this);
        this.handlerPostClick=this.handlerPostClick.bind(this);
        this.postChangeHandler=this.postChangeHandler.bind(this);
        this.handleLogoutClick= this.handleLogoutClick.bind(this);

      }
   
      componentDidMount(){
          this.getPosts();
      }

    handleLogoutClick() {
  
    this.setState(state => ({

        logoutB: !this.state.logoutB
    }));

    }
   
   
    async getPosts(){

        var url = '/posts.php';
        this.setState({loading:true})    
    
    
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

    
        })
        .then(response => response.json()
        .then(res=>{
    

              this.setState({posts:res});     
              console.log(this.state.posts);  
              this.setState({loading:false});

      
         }))
         .catch(error => {
          var res={};
          this.setState({posts:null});     

          this.setState({loading:false})    
        });

    }

    postChangeHandler(event){
  
        // this.setState({
        //   [event.target.name]:event.target.value
        // })
        const x=document.getElementsByName("postArea")[0].value;
        this.setState(state => ({
    
            post:x,

  
        }));

        // console.log(this.state.post);
     
    }

    
    async handlerPostClick(e) {



  
        this.setState(state => ({
    
          loading:true,

        }));


        var url = '/post.php';          
        await fetch(url, {   
    
            method: 'POST',
            headers: 
            {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Connection': 'keep-alive',
                'Origin':'localhost'

            },
            mode:'cors',
            Connection:'keep',
            body: JSON.stringify({ username: this.state.username, //pasar user desde login
                post: this.state.post}),
        
    
        })
        .then(response => response.text()
        .then(res=>{
    

            console.log(res);        
            this.setState({loading:false})
            this.getPosts();
            document.getElementsByName("postArea")[0].value='';

         }))
         .catch(error => {
        //   var res={};
 
        //   this.setState({posts:null});     
            console.log(error)
           this.setState({loading:false})   
        });

    }



    handlerClearClick(e) {

        this.setState(state => ({

        clicked: !state.clicked
        

    }));
        document.getElementsByName("postArea")[0].value='';
        console.log(this.state.clicked);
    }
    
       

    render(){
        return (
            
            <div>
            {
                !this.state.logoutB ? 
                <LoadHome datas={this.state.posts} handlerClear={this.handlerClearClick } 
                handlerPost={this.handlerPostClick} handlerArea={this.postChangeHandler}
                clickLogout={this.handleLogoutClick}/>
                :
                <LoadLogin/>

            }
            </div>
            


        );
    }

};

