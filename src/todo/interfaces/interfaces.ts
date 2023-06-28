
export interface TodoProps{
  title:        string;
  detail:       string;
  is_completed: boolean;
}

export interface TodoResponse extends TodoProps {
  id:  number;
}

export interface TodoResponse {
  ok:    boolean;
  todos: TodoResponse[];
}

export interface TodoContextInterface{
  todos: TodoResponse[];
  totalOfTodos: number;
  isLoading: boolean;
  createTodo: (formData: TodoProps) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodo: (todo: TodoResponse) => Promise<void>;
  searchTodo: (search: string) => Promise<void>;
}

export interface TodoStateInterface {
  totalOfTodos: number;
  todos: TodoResponse[];
  isLoading: boolean;
}





