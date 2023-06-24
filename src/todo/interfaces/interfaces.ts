
export interface TodoProps {
  title:        string;
  detail:       string;
  is_completed: boolean;
  id:           number;
}

export interface TodoResponse {
  ok:    boolean;
  todos: TodoProps[];
}

export interface TodoContextInterface{
  todos: TodoProps[];
  isLoading: boolean;
  createTodo: () => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export interface TodoStateInterface {
  todos: TodoProps[];
  isLoading: boolean;
}



