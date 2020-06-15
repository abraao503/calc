import React, { createContext, useState } from 'react';

export const List = createContext();

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);

  return (
    <List.Provider
      value={{
        list,
        setList,
      }}
    >
      {children}
    </List.Provider>
  );
}
