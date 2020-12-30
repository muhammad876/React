import React,{Component} from 'react';
import Footer from './footer';
import Navbar from './navbar';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.inputchange=this.inputchange.bind(this);
    this.registerbtn=this.registerbtn.bind(this);
    this.passwordchange=this.passwordchange.bind(this);
  }
    state = { email:'',
  password: '' ,
response:'',
url: ''}
  async callApi(){
 
    try {
     
      console.log("In function Call Api");
      this.setState({ url: 'http://localhost:4000/app/'+this.state.email+'&'+this.state.password });
      // let result= await fetch(encodeURI(this.state.url)).then(res => res.text()).then(res => this.setState({response: res }));
     // let result= await fetch('https://webhook.site/600d603c-9e96-42c3-b0b8-faa24e0445f0',{
      let result= await fetch('http://localhost:4000/insert',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          email : this.state.email,
          password : this.state.password
        })
      });
    this.setState({email:'',password:''})
    console.log(result);
  } catch (error) {
      console.log(error);
  }
  }

    registerbtn(){
      console.log("In function Register");
     this.callApi();
    }
    inputchange(event){
      this.setState({email: event.target.value});
    }
    passwordchange(evt){
      this.setState({ password: evt.target.value })
    }
    render() { 
        return ( 
            <div>
                <Navbar></Navbar>
            <header className="bg-primary py-5 mb-10 mt-5 h-100">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
              <div className="col-md-2 text-white"></div>
                <div className="col-md-8">
                <div className="row">
              <div className="col col-md-2" >
            
              </div>
              <div className="col col-md-9">
                  <h1 className="text-center text-white">Register</h1><br></br>
    
<div className="form-group">
  <label for="usr">Email:</label>
  <input type="email" value={this.state.email} className="form-control" placeholder="abc@gmail.com" onChange={this.inputchange}/>
</div>
<div className="form-group">
  <label for="pwd">Password:</label>
  <input type="password" className="form-control" value={this.state.password} onChange={this.passwordchange} placeholder="123456"/><br></br>
  <button className="btn btn-primary float-right" onClick={this.registerbtn}>Register</button>
</div>
              </div>
              <div className="col col-md-1">
              </div>
              </div>
                </div>
                   <div className="col-md-2"></div>
              </div>
            </div>
          <p>{this.state.email}</p>
          <p>{this.state.password}</p>
          {/* <p>{this.state.response}</p>
          <p>{this.state.url}</p> */}
          </header>
          <Footer></Footer>
          </div>
         );
    }
}
 
export default Register;