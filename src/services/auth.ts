// Auth Service
import apiClient from './api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone?: string;
  pays?: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  async register(data: any): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
  },

  async resetPassword(email: string): Promise<void> {
    await apiClient.post('/auth/reset-password', { email });
  },

  async verifyToken(token: string): Promise<User> {
    const response = await apiClient.get('/auth/verify', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  },
};
