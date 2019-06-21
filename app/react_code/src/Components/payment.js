import React, { Component } from 'react';
import '../App.css';

class Payment extends Component {
  state = {
    bankname: '',
    account_number: '',
    ifsc_code: '',
    branch: '',
    contact: '',
    //showname: 'true',
    shown: 'true',
    dues: '',
    donePay: '',
    totalPay: ''

  }
  
  // handleNameChange = event => {
  //   this.setState({ bankname: event.target.value })
  // }
  // handleaccnoChange = event => {
  //   this.setState({ account_number: event.target.value })
  // }
  // handleifscChange = event => {
  //   this.setState({ ifsc_code: event.target.value })
  // }
  // handlebranchChange = event => {
  //   this.setState({ branch: event.target.value })
  // }
  // handlecontactChange = event => {
  //   this.setState({ contact: event.target.value })
  // }
   
  handleInputChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
			shown: !this.state.shown
		});
    const { bankname, account_number, ifsc_code, branch, contact } = this.state;

  };

  componentDidMount(){
    fetch('/client/payments/5d09eb072f965c7314727e4b/paymentSummary')
      .then(res => res.json() )
      .then(res => this.setState( {dues: res.dues, donePay: res.donePay, totalPay: res.dues + res.donePay}) );
  }

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
        <div class="col l4 s12 m5">
          <div class="card-panel ">
            <h6 className="center">Bank Details</h6>
            
            <form onSubmit={this.handleSubmit} name="myform" style={ hidden }>
              <div class="input-field inline"  >
                <label>Bank Name</label>
                <input type="text" name="bank_name" id="" onChange={this.handleInputChange} value={this.state.bankname} />
              </div>Input
              <div class="input-field inline " >
                <label>Account Number</label>
                <input type="text" name="account_number" id="" onChange={this.handleInputChange} value={this.state.account_number} />
              </div>
              <div class="input-field inline" >
                <label>IFSC Code</label>
                <input type="text" name="IFSC Code" id="" onChange={this.handleInputChange} value={this.state.ifsc_code} />
              </div>
              <div class="input-field inline" >
                <label>Branch </label>
                <input type="text" name="branch" id="" onChange={this.handleInputChange} value={this.state.branch} />
              </div>
              <div class="input-field inline">
                <label>Alternative contact </label>
                <input type="text" name="contact" id="" onChange={this.handleInputChange} value={this.state.contact} />
              </div>
              <br />
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
              </button>
            </form>
            <div class="data"  style={ shown }>
            <button class="btn waves-effect waves-light right" type="edit" onClick={this.toggle.bind(this)}>Edit
          <i class="material-icons right">edit</i>
            </button>
            <br/><br/>
              <p>Bank Name:{this.state.bankname}</p>
              <p>Account Number:{this.state.account_number}</p>
              <p>IFSC Code:{this.state.ifsc_code}</p>
              <p>Branch:{this.state.branch}</p>
              <p>Alternative Contact:{this.state.contact}</p>
            </div>

          </div>

        </div>

        <div class="col l4 s12 m5">
          <div class="card-panel grey lighten-3 pymt-margin">
            <div class="pytsum">Payment Summary
        </div>
            <hr />
            &nbsp;
            <p> Rs{this.state.dues} </p>
            <p>Rs{this.state.donePay} </p>
            &nbsp;&nbsp;
        <hr />
            <p>Total Payment : Rs {this.state.totalPay}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default Payment;
