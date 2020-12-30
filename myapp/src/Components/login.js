import React from 'react';
class Login extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
            <header className="bg-primary py-5 mb-10 mt-5 h-100">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
              <div className="col-md-2 text-white"></div>
                <div className="col-md-8">
                <div className="row">
              <div className="col col-md-2" >
              </div>
              <div className="col col-md-9">
                  <h1 className="text-center text-white">Login</h1><br></br>
              <div className="form-group">
  <label for="usr">Email:</label>
  <input type="text" className="form-control" id="usr" placeholder="abc@gmail.com"/>
</div>
<div className="form-group">
  <label for="pwd">Password:</label><br></br>
  <input type="password" className="form-control" id="pwd" placeholder="123456"/><br></br>
  <button className="btn btn-primary float-right">Login</button>
</div>
              </div>
              <div className="col col-md-1">
              </div>
              </div>
                </div>
                   <div className="col-md-2"></div>
              </div>
            </div>
          
          </header>
          </div>
         );
    }
}
 
export default Login;