import { createContext, useEffect, useState } from "react";
import React from "react";
interface ContextType {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}
interface Props {
  children: React.ReactNode;
}
interface IUserData {
  name: string;
  picture: string;
  email: string;
}
const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    email: "",
    picture: "",
  });
  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    if (localStorageData) {
      setUserData(JSON.parse(localStorageData));
    }
  }, []);
  const contextValue = {
    userData,
    setUserData,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserContext;
