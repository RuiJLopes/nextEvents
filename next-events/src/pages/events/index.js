import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents, getFeaturedEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AllEventsPage(props) {
  // const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Scroll through our events." />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
