import ErrorAlert from "@/components/error-alert/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/ui/button";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/helpers/api-util";

export default function EventDetailPage(props) {
  if (!props.selectedEvent) {
    return (
      <>
        <ErrorAlert>
          <p>Loading...</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <>
      <EventSummary title={props.selectedEvent.title} />
      <EventLogistics
        date={props.selectedEvent.date}
        address={props.selectedEvent.location}
        image={props.selectedEvent.image}
        imageAlt={props.selectedEvent.title}
      />
      <EventContent>
        <p>{props.selectedEvent.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: { selectedEvent: event },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}
