
import { Image, Pressable, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import {Container} from "./styles"
export const Cadastro = () => {

    return(
        <Container>
            <Image source= {logo}/>
            <Text>Crie uma conta<TextHighlight> e se surpreenda</TextHighlight></Text>
            <FormContainer>
                <InputsContainer>
                <View>
                    <TextLabel>E-mail:</TextLabel>
                    <Input/>
                </View>

                <View>
                    <TextLabel>Senha:</TextLabel>
                    <Input/>
                </View>
                </InputsContainer>
            </FormContainer>
            <TextLogin>Já tem conta? <TextNavigation>Fazer login</TextNavigation></TextLogin>
        </Container>
    )
};
