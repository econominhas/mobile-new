import { Button } from '@/components/Button';
import { useAuth } from '@/contexts/auth';
import { colors } from '@/styles/colors';
import { Power } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function Home() {
  const { handleGoogleSignOut, userInfo } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <Text className="text-center font-heading text-3xl text-blue-500">
        Home
      </Text>
      <Button
        label="Signout"
        className="m-10 bg-red-600"
        icon={<Power color={colors.white} size={18} />}
        onPress={() => {
          handleGoogleSignOut();
        }}
      />
      <Text className="font-subtitle text-center text-2xl text-blue-500">
        Olá, {userInfo?.user?.name?.toString()}
      </Text>
      <Text className="font-subtitle text-center text-2xl text-blue-500">
        {userInfo?.user?.email.toString()}
      </Text>
      <Text className="font-subtitle text-center text-2xl text-blue-500">
        Code: {userInfo?.serverAuthCode}
      </Text>

      <Text className="font-subtitle line-clamp-3 text-center text-2xl text-blue-500">
        Token: {userInfo?.idToken}
      </Text>
    </View>
  );
}
