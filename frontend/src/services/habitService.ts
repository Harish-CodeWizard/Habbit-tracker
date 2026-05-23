import api from './api';

export const habitService = {
	getHabits: () => api.get('/habits'),
	getHabit: (id) => api.get(`/habits/${id}`),
	createHabit: (data) => api.post('/habits', data),
	updateHabit: (id, data) => api.put(`/habits/${id}`, data),
	deleteHabit: (id) => api.del(`/habits/${id}`),
};

export default habitService;
