import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-ddata";

export default function AllEventsPage() {
  const events = getAllEvents();
  return (
    <>
      <EventList items={events} />
    </>
  );
}
