import axios from 'axios';
import { Order } from './types/Order';

const API_URL = 'http://localhost:8080/api/orders'; // Byt ut till din backend-URL

// Funktion för att hämta alla ordrar
export const fetchOrders = async (): Promise<Order[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Funktion för att skapa en ny order
export const createOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const response = await axios.post(API_URL, order);
  return response.data;
};
