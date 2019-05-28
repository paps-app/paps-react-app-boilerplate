import React, { createContext, useState, useMemo } from "react";

type RoleType = "user" | "admin";

export interface IUserContext {
  name: string | null;
  email: string | null;
  role: RoleType;
  setNewRole: React.Dispatch<React.SetStateAction<RoleType>>;
}

const UserContext = createContext({} as IUserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setNewRole] = useState<RoleType>("user");

  const value = useMemo(() => {
    return {
      name,
      email,
      role,
      setNewRole
    };
  }, [email, name, role]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
