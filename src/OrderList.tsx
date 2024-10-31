import React, { useEffect, useState } from 'react';
import { fetchOrders } from './OrderService';
import { Order } from './types/Order';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (err) {
        setError("Failed to fetch orders.");
      }
    };
    getOrders();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.orderName} - {order.quantity} st - {order.price} SEK
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
