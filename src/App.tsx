import React from 'react';
import { AppRouter } from './router';
import {  UserProvider } from './auth';
import { TodoProvider } from './todo';
import { CreateTodoProvider } from './todo/components';


function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <CreateTodoProvider>
          <AppRouter />
        </CreateTodoProvider>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
