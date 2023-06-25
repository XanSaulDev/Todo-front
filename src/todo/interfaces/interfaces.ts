
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
  isLoading: boolean;
  createTodo: (formData: TodoProps) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export interface TodoStateInterface {
  todos: TodoResponse[];
  isLoading: boolean;
}



