import { Button } from '@/components/Button';
import { Image, Text, View } from 'react-native';

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <View className="mb-9">
        <Image source={require('@/assets/logo.png')} alt="logo do app" />
      </View>

      <View className="mb-8">
        <Button
          label="Continuar com Facebook"
          className="mb-4"
          variant="outline"
          icon={require('@/assets/logo-facebook.png')}
          testID="button-login-facebook"
        />
        <Button
          label="Continuar com Google"
          variant="outline"
          icon={require('@/assets/logo-gmail.png')}
          testID="button-login-google"
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
          icon={require('@/assets/mobile-icon.png')}
          testID="button-login-mobile"
        />
        <Button
          label="Continuar com e-mail"
          variant="outline"
          icon={require('@/assets/email-icon.png')}
          testID="button-login-email"
        />
      </View>
    </View>
  );
}
