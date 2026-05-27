import { Habit, CreateHabitInput, UpdateHabitInput } from '../types/habit.types';
import { PrismaClient, Habit as PrismaHabit } from '@prisma/client';
const prisma = new PrismaClient();

function mapPrismaHabitToHabit(habit: PrismaHabit): Habit {
  return {
    id: habit.id.toString(),
    title: habit.title,
    description: habit.description ?? undefined,
    percentCompleted: habit.percentCompleted,
    reminders: habit.reminders as Record<string, boolean> | undefined,
    completed: habit.completed,
  };
}

export const HabitRepository = {
  async createHabit(data: CreateHabitInput & { userId: number }): Promise<Habit> {
    const created = await prisma.habit.create({ data });
    return mapPrismaHabitToHabit(created);
  },
  async updateHabit(id: number, data: UpdateHabitInput): Promise<Habit | null> {
    const updated = await prisma.habit.update({ where: { id }, data });
    return updated ? mapPrismaHabitToHabit(updated) : null;
  },
  async deleteHabit(id: number): Promise<void> {
    await prisma.habit.delete({ where: { id } });
  },
  async getHabitById(id: number): Promise<Habit | null> {
    const found = await prisma.habit.findUnique({ where: { id } });
    return found ? mapPrismaHabitToHabit(found) : null;
  },
  async listHabitsByUser(userId: number): Promise<Habit[]> {
    const habits = await prisma.habit.findMany({ where: { userId } });
    return habits.map(mapPrismaHabitToHabit);
  },
};
