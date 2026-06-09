import { useContext, createContext, useState } from "react";
import { getProfileService } from "../auth/authServices";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      const userData = await getProfileService();
      setUserInfo(userData);
      console.log("User session checked:", userData);
    } catch (error) {
      console.log(error);
      setUserInfo({});
    } finally {
      setLoading(false);
    }
  };

  const getUserId = () => {
    return userInfo?._id || null;
  };

  const isAuthenticated = () => {
    return !!userInfo?._id;
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        loading,
        checkSession,
        getUserId,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
