
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
}

export interface TodoStateInterface {
  todos: TodoProps[]
}



