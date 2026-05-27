import { Request, Response } from 'express';
import { HabitService } from '../services/habitService';

export const HabitController = {
  async createHabit(req: Request, res: Response) {
    const userId = req.user?.id || 1;
    const habit = await HabitService.createHabit(userId, req.body);
    res.status(201).json(habit);
  },
  async updateHabit(req: Request, res: Response) {
    const habit = await HabitService.updateHabit(Number(req.params.id), req.body);
    res.json(habit);
  },
  async deleteHabit(req: Request, res: Response) {
    await HabitService.deleteHabit(Number(req.params.id));
    res.status(204).send();
  },
  async getHabitById(req: Request, res: Response) {
    const habit = await HabitService.getHabitById(Number(req.params.id));
    res.json(habit);
  },
  async listHabitsByUser(req: Request, res: Response) {
    const userId = req.user?.id || 1;
    const habits = await HabitService.listHabitsByUser(userId);
    res.json(habits);
  },
};
