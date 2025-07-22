import { useLoaderData, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const { events } = useLoaderData();
    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...    Events</p>}>
            <Await resolve={events} >
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>;
        </Suspense>
    );
}

export default EventsPage;

const loadEvents = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {

        throw new Response(JSON.stringify({ message: 'Could not fetch events 500?.' }),
            {
                status: 500,
            });

    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export const loader = () => {
    return {
        events: loadEvents()
    };

}