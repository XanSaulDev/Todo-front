import React from 'react';
import { AppRouter } from './router';
import {  UserProvider } from './auth';
import { TodoProvider } from './todo';
import { CreateTodoProvider } from './todo/components';
import { GlobalContextProvider } from './provider';


function App() {
  return (
    <GlobalContextProvider>
      <UserProvider>
        <TodoProvider>
          <CreateTodoProvider>

            <AppRouter />
            
          </CreateTodoProvider>
        </TodoProvider>
      </UserProvider>
    </GlobalContextProvider>
  );
}

export default App;
