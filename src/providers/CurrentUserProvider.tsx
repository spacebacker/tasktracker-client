import React, { useState } from 'react';
import { User } from '../generated/graphql';

type CurrentUserContextType = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const CurrentUserContext = React.createContext(
  {} as CurrentUserContextType
);

type CurrentUserProviderProps = {
  children: React.ReactNode;
};

function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;
