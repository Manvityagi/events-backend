import React, { Component } from 'react';
//import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
     venueName: '',
     address: {},
     maxCapacity: '',
     venueContact: '',
     amenities: [],
     shown: 'true'
    }
  }

  
  handleSubmit = event => {
    event.preventDefault();
    const data = this.state
    console.log(data)
    this.setState({
			shown: !this.state.shown
    });
    
    const { venueName, Landmark, maxCapacity, venueContact } = this.state;
  };

  handleInputChange = event => {
    event.preventDefault()
    console.log(event);
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
  render() {

    const { venueName,address,maxCapacity,venueContact,amenities } = this.state

    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
    return (
      <div className="row">
        <div className="col l s12 m5">
          <div class="card-panel ">
            <h6 className="center">Add location</h6>
            
            <form onSubmit={this.handleSubmit} name="myform" style={ shown }>
              <div className="input-field inline"  >
                <label>Venue Name</label>
                <input type="text" name="venueName" size="30" id="" onChange={this.handleInputChange} value={venueName} />
              </div>
              {/* <div className="input-field inline " >
                <label>Address</label>
                <input type="text" name="Landmark" size="30" id="" onChange={this.handleInputChange} value={this.state.Landmark} />
              </div> */}
              <div className="input-field inline" >
                <label>Capacity</label>
                <input type="text" name="maxCapacity"  size="30" id="" onChange={this.handleInputChange} value={maxCapacity} />
              </div>
             
              <div className="input-field inline">
                <label>Contact </label>
                <input type="text" name="venueContact" id="" size="30" onChange={this.handleInputChange} value={venueContact} />
              </div>
              <br />
              <label> Amenities</label>
              <div class="row">
    <div class="col l10 s12 m6">
      <div class="card">
        <div class="card-content black-text">
       
      
        <br></br>
        
        <p>
      <label>
        
        { amenities.map(amenity => (
          <div>
            <input type="checkbox" />
            <span>{amenity}</span> 
          </div>
          )
         )
        }

      </label>
    </p>  
        </div>
       
      </div>
    </div>
  </div>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
              </button>
            </form>
            <div class="data" style={hidden}>
              <button class="btn waves-effect waves-light right" type="edit" onClick={this.toggle.bind(this)}>Edit
                <i class="material-icons right">edit</i>
              </button>
              <br /><br />

              <p>Name:{this.state.venueName}</p>
              {/* <p>Landmark:{this.state.Landmark}</p> */}
              <p>Capacity:{this.state.maxCapacity}</p>
              <p>Contact:{this.state.venueContact}</p>
              <p>Amenities:{this.state.amenities.map(amenity => (<p>{amenity}</p>))}</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
