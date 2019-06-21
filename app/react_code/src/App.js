import React, {Component} from 'react';
import { Link, NavLink, withRouter ,BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Event from './Event'
import Buttonevent from './Buttonevent'


import './App.css';

class  App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <div>
        <Header/>
       {/* <div class="row">
          <div class="col l3 s8 m5">
             <div class="card-panel grey lighten-3"> 
            <Buttonevent/>

            </div>
            </div>
          <div class="col l8">
          <div class="card-panel grey lighten-3 event">
            <Event/>
            </div>

           
      </div>
        </div>
    */}
 <Buttonevent/>
      </div>
    
      </div>
      </BrowserRouter>
       
      
      
    );

  }
  
}

export default App;
