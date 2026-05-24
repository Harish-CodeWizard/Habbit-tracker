import api from './api';

export const authService = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout', {}),
  me: () => api.get('/auth/me'),
};

export default authService;
