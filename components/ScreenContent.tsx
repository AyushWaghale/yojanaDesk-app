import { Text, View } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="items-center justify-center flex-1 bg-slate-600"  >
      <Text >{title}</Text>
      <View className="my-2" />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};

