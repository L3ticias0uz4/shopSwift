import{ Text, TextInput, View, Image,Button, Pressable, Touchable, TouchableOpacity, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from './components/Card';
import { Login } from './screens/Login';

export default function App() {
  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}