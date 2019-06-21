import React, { Component } from 'react';


class profile extends Component {
  state = {
    first_name: '',
    last_name: '',
    Email: '',
    Contact_no: '',
    showname: 'true',
    shown: 'true'
  }

  handlefNameChange = event => {
    this.setState({ first_name: event.target.value })
  }
  handlelNameChange = event => {
    this.setState({ last_name: event.target.value })
  }
  handleEmailChange = event => {
    this.setState({ Email: event.target.value })
  }


  handleContactChange = event => {
    this.setState({ contact: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      shown: !this.state.shown
    });
    const { first_name, last_name, Email, Contact_no } = this.state;

  };
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    }
    return (
      <div class="row">
        <div class="col l3 s12 m5">
          <div class="card-panel grey lighten-3 ">
            <h6 className="center"><b>Profile</b></h6>

            <form onSubmit={this.handleSubmit} name="myform" style={hidden}>
              <div class="input-field inline"  >
                <label>First Name</label>
                <input type="text" name="first_name" id="" onChange={this.handlefNameChange} value={this.state.bankname} />
              </div>
              <div class="input-field inline " >
                <label>Last Name</label>
                <input type="text" name="last_name" id="" onChange={this.handlelNameChange} value={this.state.account_number} />
              </div>
              <div class="input-field inline" >
                <label>Email</label>
                <input type="text" name="email" id="" onChange={this.handleEmailChange} value={this.state.ifsc_code} />
              </div>

              <div class="input-field inline">
                <label>Contact</label>
                <input type="text" name="contact" id="" onChange={this.handleContactChange} value={this.state.contact} />
              </div>
              <br />
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
              </button>
            </form>
            <div class="data" style={shown}>
              <button class="btn waves-effect waves-light right" type="edit" onClick={this.toggle.bind(this)}>Edit
                <i class="material-icons right">edit</i>
              </button>
              <br /><br />

              <p>First Name:{this.state.first_name}</p>
              <p>Last Name:{this.state.last_name}</p>
              <p>Email:{this.state.Email}</p>
              <p>Contact:{this.state.Contact_no}</p>

            </div>

          </div>

        </div>


      </div>

    );
  }
}

export default profile;
