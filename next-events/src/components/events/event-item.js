import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

export default function EventItem(props) {
  const { event } = props;

  const humanRedableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = event.location.replace(", ", "\n");

  const exploreLink = `/events/${event.id}`;
  return (
    <li className={classes.item}>
      <Image
        src={"/" + event.image}
        alt={event.title}
        width={250}
        height={160}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanRedableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
