import React from 'react';
class Footer extends React.Component {
    state = {  }
    render() { 
        return ( 
        <footer className="py-5 navback">
        <div className="container">
    <address className="m-0 text-left text-white">
        <p title="Location">
        Street 10,G-11 Islamabad<p className="text-white">03035034567<p className="text-white">name@example.com</p></p>
        </p>
    </address>
          <p className="m-0 text-right text-white">Copyright &copy;Health Services</p>
        </div>
      
      </footer>);
    }
}
 
export default Footer;