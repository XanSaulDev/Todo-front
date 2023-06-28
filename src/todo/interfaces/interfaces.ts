
export interface TodoProps{
  title:        string;
  detail:       string;
  is_completed: boolean;
}

export interface TodoItem extends TodoProps {
  id:  number;
}

export interface TodoContextInterface{
  todos: TodoItem[];
  isLoading: boolean;
  createTodo: (formData: TodoProps) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodo: (todo: TodoItem) => Promise<void>;
  searchTodo: (search: string) => Promise<void>;
}

export interface TodoStateInterface {
  todos: TodoItem[];
  isLoading: boolean;
}





