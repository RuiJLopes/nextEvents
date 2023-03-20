import ErrorAlert from "@/components/error-alert/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import Button from "@/components/ui/button";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/helpers/api-util";
import Head from "next/head";

export default function EventDetailPage(props) {
  const { selectedEvent } = props;
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
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content={selectedEvent.description} />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
      <Comments eventId={selectedEvent.id} />
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
