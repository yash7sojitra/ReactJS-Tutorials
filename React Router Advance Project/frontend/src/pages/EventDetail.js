import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetail Page</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
}

export default EventDetailPage;
