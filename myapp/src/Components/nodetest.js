import React from 'react';
class Test extends React.Component {
    state = {
        response: ''
       
      };
      callApi(){
        fetch("http://localhost:4000/search/mmijazali@gmail.com", {dataType : 'jsonp'}).then(res => res.text()).then(res => this.setState({response: res }));
      }

      componentWillMount() {
        this.callApi();
      }
      
 
      
    render() { 
        return ( <div>
          <p>M Ijaz Ali</p>
        <p>{this.state.response}</p>
      </div> );
    }
}
 
export default Test;