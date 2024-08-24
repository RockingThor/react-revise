import { useState } from "react";
import { useNotification } from "../store/NotificationContextProvider";
import NotificationPopup from "./NotificationPopup";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { unseenCount } = useNotification();

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <h1>My App</h1>
      </div>
      <div className="nav-right">
        <div className="notification-icon" onClick={handleIconClick}>
          <span className="bell-icon">🔔</span>
          {unseenCount > 0 && (
            <span className="notification-count">{unseenCount}</span>
          )}
        </div>
        {isDropdownOpen && <NotificationPopup />}
      </div>
    </nav>
  );
};

export default Navbar;
