import api from './api';

export const habitService = {
	getHabits: () => api.get('/habits'),
  getHabit: (id: string) => api.get(`/habits/${id}`),
  createHabit: (data: any) => api.post('/habits', data),
  updateHabit: (id: string, data: any) => api.put(`/habits/${id}`, data),
  deleteHabit: (id: string) => api.del(`/habits/${id}`),
};

export default habitService;
