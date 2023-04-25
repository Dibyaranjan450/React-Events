// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /eveew nts/n=> NewEventPage
//    - /events/<someit -id>/ed=> EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage, { loaderData } from './pages/EventPage';
import EventDetailPage, {
  loader as eventDetailsLoader,
  action as deleteAction
} from './pages/EventDetailsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import Roots from './pages/Roots';
import EventsRoot from './pages/EventsRoot';
import { action as eventAction } from './components/EventForm';
import Newsletter, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, {action as authAction} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { tokenLoader, checkAuthLoader } from './util/auth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <Error />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { path: '/', element: <HomePage /> },
      { 
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
      },
      { path: 'events', element: <EventsRoot />, children: [
        {
          path: '',
          element: <EventsPage />,
          loader: loaderData
        },
        {
          path: ':id',
          element: <EventDetailPage  />,
          action: deleteAction,
          loader: eventDetailsLoader,
        },
        {
          path: ':id/edit',
          element: <EditEventPage />,
          id: 'event-details',
          action: eventAction,
          loader: eventDetailsLoader
        },
        {
          path: 'new',
          element: <NewEventPage />,
          action: eventAction,
          loader: checkAuthLoader
        }
      ]},
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: {newsletterAction}
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
