// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     containerHome:{
//         gap: 110,
//         paddingHorizontal: 20
//     },

//     contentHome:{
//         gap: 40
//     },

//     containerForm:{
//         gap: 40
//     },

//     containerInputs:{
//         gap: 25
//     },

//     input:{
//         borderWidth: 1,
//         borderColor:  "#2D3133",
//         borderRadius: 7
//     },

//     buttonCriarConta:{
//         backgroundColor: "#375EE7",
//         borderRadius: 7,
//         paddingVertical: 15

//     },

//     txtCriarConta:{ 
//         color: "#FFFFFF",
//         fontWeight: "bold",
//         textAlign: "center",
//     },

//     txtJaTemConta:{
//         textAlign: "center"
//     },

//     txtFazerLogin:{
//         color: "#375EE7",
//         textDecorationLine: "underline"
//     },

//     txtTitulo:{
//         color: "#2D3133",
//         fontSize: 40,
//         fontWeight: 700
//     },

//     txtHighlights:{
//         color: "#375EE7"
//     }
// })

import styled from "styled-components/native";

export const Container = styled.View`
gap: 110px;
padding: 0 20px;
`
export const ContentCadastro = styled.View`
    gap: 40px;
`

export const TextTitle = styled.Text`
    font-size: 40px;
    font-weight: 700;
    width: 300px;
`

export const TextHighlight = styled.Text`
    color: #375EE7
`

export const FormContainer = styled.View`
    gap: 40px;
`

export const InputsContainer = styled.View`
    gap: 25px;
`
export const TextLabel = styled.Text`
    font-size: 20px;
`

export const Input = styled.TextInput`
    border: 1px solid #2D3133;
    border-radius: 7px;
`
export const CreateAccountButton = styled.Pressable`
    background-color: #375EE7;
    border-radius: 7px;
`
export const TextButton = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`
export const TextLogin = styled.Text`
    font-size: 16px;
    text-align: center;
`   
export const TextNavigation = styled.Text`
    color: #375EE7;
    text-decoration-line: underline;
`
