import { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextType {
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
  refreshIdentity: () => void;
  createAnonymousAccount: () => Promise<boolean>;
  isLoading: boolean;
  updateAvatar: (url: string) => Promise<void>;
  creationState: any;
  retryAccountCreation: () => Promise<boolean>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
  refreshIdentity: () => {},
  createAnonymousAccount: async () => false,
  isLoading: false,
  updateAvatar: async () => {},
  creationState: { step: 'idle', progress: 0, message: '' },
  retryAccountCreation: async () => false,
});

export const useUserContext = () => useContext(UserContext);

export interface UserCreationStateInterface {
  step: string;
  progress: number;
  message: string;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creationState, setCreationState] = useState({
    step: 'idle',
    progress: 0,
    message: ''
  });

  const logout = () => setUser(null);
  const refreshIdentity = () => {};
  const createAnonymousAccount = async () => false;
  const updateAvatar = async () => {};
  const retryAccountCreation = async () => false;

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      logout,
      refreshIdentity,
      createAnonymousAccount,
      isLoading,
      updateAvatar,
      creationState,
      retryAccountCreation,
    }}>
      {children}
    </UserContext.Provider>
  );
};