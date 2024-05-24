import { Button } from '@/components/Button';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Text, View } from 'react-native';

import EmailOutlineIcon from '@/assets/svg/email-outline.svg';
import FacebookIcon from '@/assets/svg/logo-facebook.svg';
import GoogleIcon from '@/assets/svg/logo-gmail.svg';
import LogoImage from '@/assets/svg/logo.svg';
import MobileIcon from '@/assets/svg/mobile.svg';

export default function Login() {
  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
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

  async function handleGoogleSignOut() {
    try {
      const userInfo = await GoogleSignin.signOut();
      console.log(userInfo);
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

  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <View className="mb-9">
        <LogoImage width={140} height={122} />
      </View>

      <View className="mb-8">
        <Button
          label="Continuar com Facebook"
          className="mb-4"
          variant="outline"
          icon={<FacebookIcon width={24} height={24} />}
          testID="button-login-facebook"
        />

        <Button
          label="Continuar com Google"
          variant="outline"
          icon={<GoogleIcon width={24} height={24} />}
          testID="button-login-google"
          onPress={() => {
            handleGoogleSignIn();
          }}
        />
      </View>

      <View className="mb-8 flex flex-row items-center justify-between gap-2">
        <View className="h-0.5 w-36 bg-gray-500" />
        <Text className="font-body text-base text-gray-500">Ou</Text>
        <View className="h-0.5 w-36 bg-gray-500" />
      </View>

      <View>
        <Button
          label="Continuar com celular"
          className="mb-4"
          variant="outline"
          icon={<MobileIcon width={24} height={24} />}
          testID="button-login-mobile"
        />
        <Button
          label="Continuar com e-mail"
          variant="outline"
          icon={<EmailOutlineIcon width={24} height={24} />}
          testID="button-login-email"
        />
      </View>
    </View>
  );
}
