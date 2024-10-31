import axios from 'axios';
import { Order } from '../types/Order';
import { Customer } from '../types/Customer';

const API_URL_Orders = 'http://localhost:8080/api/orders'; 
const API_URL_Customers = 'http://localhost:8080/api/customers'; 


export const fetchOrders = async (): Promise<Order[]> => {
  const response = await axios.get(API_URL_Orders);
  return response.data;
};

export const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get(API_URL_Customers);
  return response.data;
};


export const createOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const response = await axios.post(API_URL_Orders, order);
  return response.data;
};
