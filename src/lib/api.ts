import axios from 'axios';
import { ApiResponse, IncidentReport } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const reportApi = {
  getHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
  
  getReports: async (): Promise<ApiResponse<IncidentReport[]>> => {
    const response = await api.get('/reports');
    return response.data;
  },
};

export default api;
