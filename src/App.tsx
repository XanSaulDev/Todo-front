import React from 'react';
import { AppRouter } from './router';
import { UserProvider } from './auth';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
