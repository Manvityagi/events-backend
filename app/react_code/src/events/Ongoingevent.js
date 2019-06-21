import React, { Component } from 'react';
import './App.css';
class List extends Component {
    state = {
        events: [
            {
                id: '01',
                name: 'article15',
                location: 'rohini',
                time_start: '12:00',
                time_end: '3:00',
                no_of_seats: '20',
                ticket_price: '100',
                ticket_sold: '20',
                total_price_collected: '2000'
            },
            {
                id: '02',
                name: 'article15',
                location: 'rohini',
                time_start: '10:00',
                time_end: '1:00',
                no_of_seats: '30',
                ticket_price: '200',
                ticket_sold: '20',
                total_price_collected: '4000'
            }
        ]

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
        const { events } = this.state;
        const eventList = events.length ? (
            events.map(event => {
                return (
                    <div className=" card grey lighten-3" key={event.id}>
                        <div className="card-content">
                            <span className="card-title"><b>{event.name}</b></span>
                            <span class="card-title"><div className="location">{event.location}</div></span>
                            <div class="row">
                                <div class="col l6">
                                    <div><b>Time slot:</b> {event.time_start}-{event.time_end}</div>
                                    <div><b>Number of Seats:</b> {event.no_of_seats}</div>
                                </div>
                                <div class="col">
                                    <div><b>Ticket price:</b> {event.ticket_price}</div>
                                    <div><b>Ticket Sold:</b> {event.ticket_sold}</div>
                                    <div><b>Total Price Collected: </b>{event.total_price_collected}</div>
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

