import { useLoaderData, useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
    const data = useLoaderData();
    const token = useRouteLoaderData('root');
    
    return(
        <div>
            { token && <EventForm method={'patch'} event={data.event} />}
        </div>
    );
}

export default EditEventPage;