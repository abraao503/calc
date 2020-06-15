import React from 'react';

import ListProvider from './src/context/List';
import Routes from './src/routes';

export default function App() {
  return (
    <ListProvider>
      <Routes/>
    </ListProvider>
  );
}
