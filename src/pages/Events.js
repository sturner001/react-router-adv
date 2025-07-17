import { Link } from "react-router-dom";
const EVENTS = [

    { id: 'e1', title: 'My Event 1' },
    { id: 'e2', title: 'My Event 2' },
    { id: 'e3', title: 'My Event 3' },
    { id: 'e4', title: 'My Event 4' },
    { id: 'e5', title: 'My Event 5' },
    { id: 'e6', title: 'My Event 6' },

];

const EventsPage = () => {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {EVENTS.map((event) => (
                    <li key={event.id} >
                        <Link to={`/events/${event.id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EventsPage;