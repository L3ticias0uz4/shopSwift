import { Image, Pressable, Text, TextInput, View } from "react-native"
import {ContainerContact, ContainerForm, DescriptionInput, Input, MapContainer, MapText, MapsImage, MessageText, TextButton, TextHighlight, TextLabel} from "./styles"
import logo from "../../assets/logo.png"
import mapa from "../../assets/mapa.png"


export const Contato = () => {

    return (
        <ScrollView>
        <ContainerContact>

            <Image source={ logo } />

            <ContainerForm>
                <MessageText>Mande uma <TextHighlight>Mensagem</TextHighlight></MessageText>
                <View>
                    <TextLabel>Nome</TextLabel>
                    <Input />
                </View>
                <View>
                    <TextLabel>Assunto:</TextLabel>
                    <Input />
                </View>
                <View>
                    <TextLabel>Mensagem</TextLabel>
                    <DescriptionInput />
                </View>
            </ContainerForm>
            <Button>
                <TextButton>Enviar</TextButton>
            </Button>
            
            <MapContainer>
                <MapText>Venha nos <TextHighlight>Visitar</TextHighlight></MapText>
                <MapsImage source={ mapa } />
            </MapContainer>
        </ContainerContact>
        </ScrollView>
    )
}