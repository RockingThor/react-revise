import { createContext, useContext, useState } from "react";
import Notification from "../components/Notification";

const NotificationContext = createContext([]);

// eslint-disable-next-line react/prop-types
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unseenCount, setUnseenCount] = useState(0);

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, message]);
    setUnseenCount((count) => count + 1);
  };

  const markAllRead = () => {
    setUnseenCount(0);
    let temp = notifications;
    temp.forEach((item, i) => {
      temp[i].seen = true;
    });
    setNotifications(temp);
  };
  const markNotificationRead = (id) => {
    setUnseenCount((count) => count - 1);
    setNotifications((prevNot) => {
      prevNot.forEach((item, i) => {
        if (item.id === id) {
          prevNot[i].seen = true;
        }
      });
      return prevNot;
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unseenCount,
        addNotification,
        markAllRead,
        markNotificationRead,
      }}
    >
      <Notification />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
