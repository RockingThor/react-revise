import React from "react";
import "../style/RecentOrders.css";

const RecentOrders = () => {
  const orders = [
    {
      name: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      name: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    // more orders
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderNo}>
              <td>{order.name}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
