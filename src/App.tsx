import React from 'react';
import { AppRouter } from './router';
import {  UserProvider } from './auth';
import { TodoProvider } from './todo';
import { CreateTodoProvider } from './todo/components';
import { GlobalContextProvider } from './provider';


function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <GlobalContextProvider>
        <UserProvider>
          <TodoProvider>
            <CreateTodoProvider>

              <AppRouter />
              
            </CreateTodoProvider>
          </TodoProvider>
        </UserProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
