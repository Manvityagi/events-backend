import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Payment from "./Components/payment";
import Event from './Event'
import ClientEvents from './Components/events/ClientEvents'
import profile from './Components/profile/Profile'
import './App.css'
import Location from './Components/venue/Location'

/*class Event extends Component{
    render(){
        return (
            <div>
                <a class="waves-effect waves-light btn">Profile</a>
            <br/>
                <a class="waves-effect waves-light btn">Manage Events</a>
                <br/>
            <a class="waves-effect waves-light btn">Add Venue</a>
            <br/>
            <a class="waves-effect waves-light btn">View payment</a>
            <br/>
            
            <a class="waves-effect waves-light btn">button</a>
            <br/>
            <a class="waves-effect waves-light btn">button</a>

            </div>
            
          
        );
    
      }
      
 }
 export default Event
 */

const Eventb = () => {

    return (
        <div class="row">

            <BrowserRouter>
                <div class="col l3 s8 m5">
                    <div class="card-panel grey lighten-3">

                        <button class="btn">
                            <NavLink to="/profile" > Profile</NavLink>
                       </button>
                        <button class="btn">    
                            <NavLink to="/event" >Manage Events</NavLink>
                        </button>
                        <button class="btn">
                            <NavLink to="/venue" >Add Venue</NavLink>
                        </button>
                        <button class="btn">
                            <NavLink to="/payment" >View Payment</NavLink>
                        </button>
                        <button class="btn">
                            <NavLink to="/" ></NavLink>
                        </button>
                        <button class="btn">
                            <NavLink to="/" ></NavLink>
                        </button>

                    </div>
                </div>
                <div class="col l9">
                    <div class="card-panel event">
                        <Switch>
                            <Route exact path="/" component={Event} />
                            <Route path="/profile" component={profile} />
                            <Route path="/venue" component={Location} />
                            <Route path="/payment" component={Payment} />
                            <Route path="/event" component={ClientEvents} />
                        </Switch>
                    </div></div>
            </ BrowserRouter>
        </div>

    )
}
export default Eventb