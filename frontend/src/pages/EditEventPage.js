import { useLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
    const data = useLoaderData();

    return(
        <div>
            <h1> Edit Event Page </h1>
            <EventForm method={'patch'} event={data.event} />
        </div>
    );
}

export default EditEventPage;