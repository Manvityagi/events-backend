import React, { Component } from 'react';
import './App.css';
class List extends Component {
      state = { pastEvents: [] }

      componentDidMount() {
        fetch('/client/events/5d08e15b52c1a64074b90aca/pastEvent')
          .then(res => res.json())
           .then(pastEvents => { this.setState({ pastEvents }) 
                                    console.log(this.state.pastEvents)
                                    //console.log( Object.keys(pastEvents[0].address) )
                                 } );
      }

    /*    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts:res.data.slice(0,10)
                })
            })
        }
     */

    render() {
        const  pastEvents  = this.state.pastEvents;
        const eventList = this.state.pastEvents.length ? (
            pastEvents.map(event => {
                return (
                    <div className=" card grey lighten-3" key={event._id}>
                        <div className="card-content">
                            <span className="card-title"><b>{event.name}</b></span>
                            <span class="card-title"><div className="location">location ankaj bhaiya</div></span>
                            <div class="row">
                                <div class="col l6">
                                    <div><b>Time slot:</b> {event.time.timeSlot.startTime}-{event.time.timeSlot.endTime}</div>
                                    <div><b>Number of Seats:</b> {event.maxParticipation}</div>
                                </div>
                                <div class="col">
                                    <div><b>Ticket price:</b> {event.ticketMRP}</div>
                                    <div><b>Ticket Sold:</b> {event.ticketSold}</div>
                                    <div><b>Total Price Collected: </b>{event.ticketMRP*event.ticketSold}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Event yet!</div>
            )
        return (
        <div className="container">
                {eventList}
            </div>
        )
    }
}
export default List;

