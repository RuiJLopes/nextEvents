import { createContext, useState, useEffect } from "react";

export const NotificationCtx = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotication: () => {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification) {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);

      // Cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status,
    });
  }
  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotication: hideNotificationHandler,
  };
  return (
    <NotificationCtx.Provider value={context}>
      {props.children}
    </NotificationCtx.Provider>
  );
}
