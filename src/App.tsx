import React from 'react';
import {  UserProvider } from './auth';
import { TodoProvider } from './todo';
import { CreateTodoProvider } from './todo/components';
import {  GlobalContextProvider } from './shared';
import { AppRouter } from './router';


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
