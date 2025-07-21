import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventDetailPage, 
{ 
  loader as eventDetailLoader,
  action as deleteEventAction,
 } from './pages/EventDetail';
import EventsRootLoyout from './pages/EventsRoot';
import {action as addUpdateEventAction } from './components/EventForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventsRootLoyout />,
        children: [
          {
            path: '',
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',

            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: addUpdateEventAction,
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: addUpdateEventAction,
          },
        ],
      },
    ],
  }
]);


function App() {
  return <RouterProvider router={router} />
}
export default App;
