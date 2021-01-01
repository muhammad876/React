import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import '../css/navbar.css';
import Img from '../assets/img.jpg';
import Img2 from '../assets/img2.jpg';
class Header extends Component {
    state = {  }
    render() { 
        return (         
            <div className="container mt-5">
           
                 <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="animation"
      src={Img}
      width="100"
      alt="First slide"
   />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="animation"
      src={Img2}
      width="100"
      alt="Third slide"
    />
 </Carousel.Item>
</Carousel>
        {/* <header className="bg-primary py-5 mb-5 mt-5 h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          <div className="col-md-2 text-white"></div>
            <div className="col-md-8">
         
            <h2 className="text-white">What We Do</h2>
<hr/>
<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum</p>

<div className="text-right">
<a className="btn btn-primary btn-lg pull-right" href="#">Start</a>
</div>
               </div>
               <div className="col-md-2"></div>
          </div>
        </div>
      
      </header> */}
    
      </div>);
    }
}
 
export default Header;