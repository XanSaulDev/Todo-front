import React from 'react';
import { AppRouter } from './router';
import {  UserProvider } from './auth';
import { Loading } from './components';

function App() {
  return (
    <UserProvider>
    <AppRouter />
    </UserProvider>
  );
}

export default App;
