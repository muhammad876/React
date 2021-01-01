import React from 'react';
import Dropdown from 'react-dropdown';
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.dropdownvalue=this.dropdownvalue.bind(this);
  }
  dropdownvalue(event)
  {
        this.setState({value: event.target.value})
        const value=this.state.value;
        alert(event.target.value);
        if(event.target.value==="Services"){
          return(
          <div><h1>Services</h1></div>);
        }
        else if(event.target.value==="Physiotherapy Services"){
          return(<h1>Physiotherapy Services</h1>)
        }
        else if(event.target.value==="Babysitting Services"){
          return(<h1>Babysitting Services</h1>)
        }
        return(<h1>Babysitting Services</h1>);
  }
    render() { 
      this.state={
        value:''
      }
   
        return ( 
            
           <div>
             
            <nav className="navbar navback navbar-expand-lg  fixed-top ">
              <div className="container color">
                <a className="navbar-brand text-white" href="#">Health Services</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link text-white" href="/">Home
                  
                      </a>
                    </li>
          
                    <li className="nav-item active">
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white " href="/aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/register">Contact Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/test">Team</a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-item box">
                       <select className="nav-link text-white" onChange={this.dropdownvalue} value={this.state.value}>
                         <option value="Services">Services</option>
                         <option value="Physiotherapy Services">Physiotherapy Services</option>
                         <option value="Babysitting Services">Babysitting Services</option>
                         <option value="Cupping Therapy">Cupping Therapy</option>
                         <option value="Acupuncture Therapy" >Acupuncture Therapy</option>
                       </select>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>       </div>
         );
    }
}
 
export default Navbar;