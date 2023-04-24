import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const events = useLoaderData();

    return (
        <EventsList events={events} />
    );
}

export async function loaderData() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return json(
            {message: 'Could not fetch events.'},
            {status: response.status}
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export default EventsPage;