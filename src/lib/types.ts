export type boardsType = {
  id: string;
  name: string;
  columns?: {
    id: string;
    name: string;
    tasks?: {
      id: string;
      title: string;
      description: string;
      status: string;
      subtasks: {
        id: string;
        title: string;
        isCompleted: boolean;
      }[];
    }[];
  }[];
};

export type columnType = {
  name: string;
  tasks: {
    title: string;
    description: string;
    status: string;
    subtasks: {
      title: string;
      isCompleted: boolean;
    }[];
  }[];
};

export type tasksType = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: {
      id: string;
      title: string;
      isCompleted: boolean;
  }[];
}
