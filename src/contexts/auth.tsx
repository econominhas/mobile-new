import {
  GoogleSignin,
  User,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactElement }) {
  const [isSigned, setIsSigned] = useState(false);
  const [userInfo, setUserInfo] = useState<User>();

  const handleOnLoginFinished = useCallback((userInfo: User) => {
    setIsSigned(true);
    setUserInfo(userInfo);
    router.navigate('(tabs)');
  }, []);

  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      return handleOnLoginFinished(userInfo);
    } catch (error: any) {
      console.log('ERROR: ', error.code, ' - ', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const handleGoogleSignOut = useCallback(async () => {
    try {
      await GoogleSignin.signOut();
      setIsSigned(false);
      setUserInfo(undefined);
      router.navigate('(auth)');
    } catch (error: any) {
      console.log('ERROR: ', error.code, ' - ', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, []);

  const valueMemo = useMemo(
    () => ({
      isSigned,
      userInfo,
      setUserInfo,
      handleGoogleSignIn,
      handleOnLoginFinished,
      handleGoogleSignOut,
    }),
    [
      isSigned,
      userInfo,
      setUserInfo,
      handleOnLoginFinished,
      handleGoogleSignOut,
    ]
  );
  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

export interface AuthContextProps {
  isSigned: boolean;
  userInfo: User | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
  handleGoogleSignIn(): void;
  handleOnLoginFinished(userInfo: User): void;
  handleGoogleSignOut(): void;
}

export function useAuth() {
  const context = useContext<AuthContextProps>(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
