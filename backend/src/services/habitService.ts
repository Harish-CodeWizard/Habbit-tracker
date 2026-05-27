import { HabitRepository } from '../repositories/habitRepository';
import { CreateHabitInput, UpdateHabitInput } from '../types/habit.types';

export const HabitService = {
  createHabit: async (userId: number, data: CreateHabitInput) => {
    return HabitRepository.createHabit({ ...data, userId });
  },
  updateHabit: async (id: number, data: UpdateHabitInput) => {
    return HabitRepository.updateHabit(id, data);
  },
  deleteHabit: async (id: number) => {
    return HabitRepository.deleteHabit(id);
  },
  getHabitById: async (id: number) => {
    return HabitRepository.getHabitById(id);
  },
  listHabitsByUser: async (userId: number) => {
    return HabitRepository.listHabitsByUser(userId);
  },
};
