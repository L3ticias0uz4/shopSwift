import { Text, TextInput, View, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from './components/card/Index.js';

export default function App() {
  return (
    <SafeAreaView>
      <Card />
    </SafeAreaView>

  );
}
