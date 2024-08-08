import React, { createContext, useState, useContext, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = (email: string, password: string) => {
    // Add your authentication logic here
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const signUp = (email: string, password: string) => {
    // Add your sign-up logic here
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const logOut = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
