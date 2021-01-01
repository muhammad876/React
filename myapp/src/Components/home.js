import React from 'react';
import Navbar from './navbar';
import ContactUs from './contactus';
import Footer from './footer';
import Card from './card';
import Header from './header';
class Home extends React.Component {
    state = {  }
    render() { 
        return (
        <div>
            <Navbar />
          
            <div className="row  mb-5 mt-5">
            <div className="col col-md-1">
              </div>
              <div className="col col-md-10">
              <Header>
            </Header>
              <ContactUs></ContactUs>
              <Card></Card>
              </div>
              <div className="col col-md-1">
              </div>
              </div> 
           <Footer></Footer>
           </div>
          );
    }
}
 
export default Home;