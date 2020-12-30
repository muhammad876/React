import React from 'react';
import Navbar from './navbar';
import ContactUs from './contactus';
import Footer from './footer';
import Login from './login';
import '../index.css';
class About extends React.Component {
 
    render() { 
        return (
            <div>
            <Navbar />
           <Login></Login>
           <Footer></Footer>
           </div>
        );
    }
}
 
export default About;