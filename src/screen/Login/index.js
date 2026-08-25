
import { Image, Pressable, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo.png";
import { style } from "./style";
export const Login = () => (
    <View style={style.containerHome}>
        <Image source={logo} />

        <View style={style.contentHome}>
            <Text style={style.txtTitulo}>
                Faça login e se <Text style={style.txtHighLight}>Surpeenda</Text>
            </Text>
            <View style={style.contentForm}>
                <View style={style.containerInput}>
                <View>
                    <Text>E-mail:</Text>
                    <TextInput keyboardType="email-address" style={style.input}/>
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput secureTextEntry={true} style ={style.input} />
                </View>
                </View>
                <Pressable style={style.buttonLogin}>
                    <Text>Entrar</Text>
                </Pressable>
            </View>

            <Text>
                Não tem a uma conta?<Text> Criar conta</Text>
            </Text>
        </View>
    </View>
);
