import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../css/navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <div className="header">
            <div className="logo">
      
            </div>
            <div className="navbar">
                    <ul className="list">
                        <li> Home</li>
                        <li> About Us</li>
                        <li>Contact Us </li>
                        <li><button className="btn dropdown">Press</button> </li>
                        </ul>
                        </div>
            </div>
            <div className="App">
            </div>
            </div>
        );
    }
}
 
export default Navbar;