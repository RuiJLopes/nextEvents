import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-ddata";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div>
        <ul>
          <EventList items={featuredEvents} />
        </ul>
      </div>
    </>
  );
}
