import styled from 'styled-components/native';

export const Container = styled.View`
    gap:40px;
    padding-left: 20px;
`
export const HighlightSection = styled.View`
     gap: 5px;
`
export const TitleHighlight = styled.Text`
    font-size: 25px;
    font-weight: 700;
`
export const TextHighlight = styled.Text`
    color: #375EE7;
`
export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 20
    }
})``
