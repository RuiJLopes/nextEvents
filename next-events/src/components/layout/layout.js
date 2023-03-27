import { useContext } from "react";
import { NotificationCtx } from "../../../store/notification-context";
import Notification from "../ui/notification";
import MainHeader from "./mainHeader";

export default function Layout(props) {
  const notificationContext = useContext(NotificationCtx);

  const activeNotification = notificationContext.notification;
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
