import {NativeBaseProvider, StatusBar} from 'native-base';
import { Theme } from './src/theme/theme';
import Routes from './src/Routes';

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar backgroundColor={Theme.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
