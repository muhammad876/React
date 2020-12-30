import React from 'react';
import Home from './home';
import About from './aboutcomponent';
import Register from './register';
import Test from './nodetest';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
class App extends React.Component {
  state = { name: 0 }
  render() { 
    return (
     
       <div>
          <BrowserRouter>
          <Switch>
          <Route path='/aboutus' ><About></About></Route>
          <Route path='/register' ><Register></Register></Route>
          <Route path='/test' ><Test></Test></Route>
          <Route path='/' >
         <Home></Home>
          </Route>
           
            </Switch>
     </BrowserRouter>
    </div>
       );
  }
}
export default App;