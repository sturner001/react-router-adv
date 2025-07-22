import { useRouteLoaderData, redirect, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';



const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading... Event</p>}>
                <Await resolve={event}>
                    {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading... All Events</p>}>
                <Await resolve={events}>
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventDetailPage;

const loadEvent = async (id) => {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch events 500?.' }),
            {
                status: 500,
            });

    } else {
        const resData = await response.json();
        return resData.event;
    }

}

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

export const loader = async ({ request, params }) => {
    const id = params.eventId;
    return ({
        event: await loadEvent(id),
        events: loadEvents()
    });
};

export const action = async ({ request, params }) => {
    const eventId = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not delete event.' }),
            {
                status: 500,
            });

    } else {
        return redirect('/events');
    }

} 