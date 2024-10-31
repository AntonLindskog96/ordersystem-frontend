import React, { useEffect, useState } from 'react';
import { fetchCustomers, fetchOrders } from '../services/OrderService';
import { Order } from '../types/Order';
import { Customer } from '../types/Customer';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [customers, setCustomers] = useState<Customer[]>([]);

  
  useEffect(() => {
    const loadData = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (err) {
        setError("Error fetch Orders");
      }

      
      try {
        const customersData = await fetchCustomers();
        setCustomers(customersData);
      } catch (err) {
        setError("Error fetch Customers");
      }
    };

    loadData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from Backend</h1>

      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.orderName} - {order.quantity} st - {order.price} SEK
          </li>
        ))}
      </ul>

      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName}  {customer.lastName} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;