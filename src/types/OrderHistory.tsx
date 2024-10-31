export interface OrderHistory {
    id: number;
    action: 'created' | 'updated' | 'deleted';    
    timestamp: string;
    details: string;
  }