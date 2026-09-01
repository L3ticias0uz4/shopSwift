
import { Image, Pressable, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
export const Login = () => (
    <View style={styles.containerHome}>
        <Image source={logo} />

        <View style={styles.contentHome}>
            <Text style={styles.TxtTitulo}>
                Faça login e se <Text style={styles.txtHighLight}>Surpreenda</Text>
            </Text>
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                  <View>
                      <Text>E-mail:</Text>
                      <TextInput keyboardType="email-address" style={styles.input}/>
                  </View>

                  <View>
                      <Text>Senha:</Text>
                      <TextInput secureTextEntry={true} style ={styles.input} />
                  </View>
                </View>
                <Pressable style={styles.buttonLogin}>
                    <Text style={styles.TxtLogin}>Entrar</Text>
                </Pressable>
            </View>

            <Text style={styles.txtJaTemConta}>
                Já tem conta?<Text style={styles.txtCriarConta}> Fazer Login</Text>
            </Text>
        </View>
    </View>
);
