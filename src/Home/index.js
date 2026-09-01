import {Container, TitleHighlight, TextHighlight, Scroll, HighlightSection} from "./styles";
import { Image } from "react-native";
import logo from "../assets/logo.png";
import destaque1 from "../assets/destaque1.png";
import destaque2 from "../assets/destaque2.png";
import destaque3 from "../assets/destaque3.png";

export const Home = () => {
    return(

        <Container>
            <Image source={logo}/>

            <HighlightSection>
            
              <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

            <Scroll horizontal showsHorizontalScrollIndicator={false}>
              
                <Image source={destaque1}/>
                <Image source={destaque2}/>
                <Image source={destaque3}/>
            </Scroll>              
            </HighlightSection>
        </Container>
    )
}