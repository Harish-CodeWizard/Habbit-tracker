export interface CreateHabitInput {
  title: string;
  description?: string;
  percentCompleted?: number;
  reminders?: Record<string, boolean>;
}

export interface UpdateHabitInput {
  title?: string;
  description?: string;
  percentCompleted?: number;
  reminders?: Record<string, boolean>;
  completed?: boolean;
}

export interface Habit {
  id: string;
  title: string;
  description?: string;
  percentCompleted?: number;
  reminders?: Record<string, boolean>;
  completed?: boolean;
}
