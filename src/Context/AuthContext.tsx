import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../config/api";

interface Auth {
  children: ReactNode;
}

interface AuthContextProps {
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  logout(): void;
  getBase64(): void;
  error: boolean;
  loading: boolean;
  user: User | null;
  avatar: string | null;
}

interface User {
  avatar: string | null;
  created_at: string;
  email: string;
  id: number;
  name: string;
  password: string;
  updated_at: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const Auth = ({ children }: Auth) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("SESSION_ID");
    navigate("/");
  };

  const checkToken = async () => {
    const token = sessionStorage.getItem("SESSION_ID");
    try {
      const response = await api.get("auth/checktoken", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data.user);
    } catch (e) {
      logout();
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.post("loginUser", {
        emailUser: email,
        passwordUser: password,
      });
      const token = response.data.token;
      sessionStorage.setItem("SESSION_ID", token);
      checkToken();
      navigate("/home");
    } catch (err) {
      sessionStorage.removeItem("SESSION_ID");
      setError(true);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.post("/createUser", {
        nameUser: name,
        emailUser: email,
        passwordUser: password,
      });
      const token = response.data.token;
      sessionStorage.setItem("SESSION_ID", token);
      checkToken();
      navigate("/home");
    } catch (err) {
      sessionStorage.removeItem("SESSION_ID");
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getBase64 = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.get("getavatar");
      setAvatar(response.data.avatar);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("SESSION_ID");
    const url = window.location.pathname;

    if (url !== "/" && url !== "/signUp") {
      if (!token) {
        logout();
      }
      checkToken();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logout,
        signUp,
        getBase64,
        avatar: avatar,
        error: error,
        loading: loading,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
