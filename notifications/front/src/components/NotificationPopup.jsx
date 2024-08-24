import { useNotification } from "../store/NotificationContextProvider";

const NotificationPopup = () => {
  const { notifications, clearUnseenNotifications, markNotificationRead } =
    useNotification();
  return (
    <div>
      <div className="notification-dropdown">
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`${
                  notification.seen ? "seen-item" : "unseen-item"
                } notification-list-item`}
                onClick={() => {
                  markNotificationRead(notification.id);
                }}
              >
                {notification.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
