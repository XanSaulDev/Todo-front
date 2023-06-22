import React from 'react';
import { AppRouter } from './router';
import {  UserProvider } from './auth';
import { TodoProvider } from './todo';


function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <AppRouter />
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
