import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EventsRootLoyout = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}

export default EventsRootLoyout;