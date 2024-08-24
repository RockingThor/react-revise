import { useState, useEffect } from "react";
import { useNotification } from "../store/NotificationContextProvider";

const Notification = () => {
  // eslint-disable-next-line no-unused-vars
  const [isWebSocketSupported, setIsWebSocketSupported] = useState(false);
  const { addNotification } = useNotification();

  useEffect(() => {
    if ("WebSocket" in window) {
      setIsWebSocketSupported(true);
      startWebsocketConnection();
    } else {
      console.warn("Websocket isn't supported. Falling back to long polling");
      setIsWebSocketSupported(false);
      startPolling();
    }
  }, []);
  function startWebsocketConnection(retryCount = 0) {
    if (retryCount > 5) return;
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
      console.log("Connected with socket");
    };
    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      addNotification(notification);
    };
    ws.onerror = (error) => {
      console.error("Error from websocket: ", error);
      ws.close();
    };
    ws.onclose = () => {
      console.warn("Websocket connection terminated. trying to reconnect...");
      setTimeout(() => {
        startWebsocketConnection(++retryCount);
      }, 5000);
    };
  }
  function startPolling() {}
  return <></>;
};

export default Notification;
