import { json, useLoaderData, redirect } from "react-router-dom";

import EventItem from '../components/EventItem';

function EventDetailPage() {
    const data = useLoaderData();

    return(
        <div>
            <EventItem event={data.event} />
        </div>
    );
}

export async function loader({request, params}) {
    const id = params.id;

    const responce = await fetch(`http://localhost:8080/events/${id}`);
    if(!responce.ok) {
        throw json(
            {message: 'Could not fetch details for selected event!'},
            {status: responce.status}
        );
    } else {
        return responce;
    }
}

export async function action({params , request}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
    });
    if(!response.ok) {
        throw json(
            {message: 'Could not delete event.'},
            {status: response.status}
        );
    }

    return redirect('/events');
}

export default EventDetailPage;