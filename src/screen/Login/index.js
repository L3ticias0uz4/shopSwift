import {styles} from './styles';
import {Image, Text, View} from 'react-native';
import logo from '../../assets/logo.png';

export const Login = () => {
  return (
    <View>  
        <Image source={logo} />
        <Text style={styles.TxtColor}> Faça Login e se <Text style={styles.txtHighlight}>Surpreenda</Text></Text>
    </View>
    );
}