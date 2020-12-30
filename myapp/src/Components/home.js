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
            <Header>
            </Header>
            <div className="row">
              <div className="col col-md-2" >
            
              </div>
              <div className="col col-md-9">
             
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