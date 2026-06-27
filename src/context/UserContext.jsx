import { useContext, createContext, useState } from "react";
import { getProfileService } from "../pages/auth/authServices";
import { useEffect } from "react";
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      const profile = await getProfileService();

      if (profile) {
        setUserInfo(profile);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = !!userInfo?._id;

  useEffect(() => {
    checkSession();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        loading,
        checkSession,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
