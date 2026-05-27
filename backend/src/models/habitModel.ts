export interface Habit {
  id: number;
  title: string;
  description?: string;
  streak: number;
  completed: boolean;
  percentCompleted: number;
  reminders?: Record<string, boolean>; // e.g., {"2026-05-26": true}
  userId: number;
  createdAt: Date;
}
