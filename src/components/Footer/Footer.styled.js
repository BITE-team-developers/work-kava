import styled from '@emotion/styled';

export const Section = styled.footer`
    display: block;
    margin: 0;
    padding: 50px 0;
    background-color: ${props => props.theme.colors.primary};

    @media screen and (${props => props.theme.devices.desktop}) {
        padding: 100px 0 144px 0;
    }
` 
export const FooterContainer = styled.div`
   
    @media screen and (${props => props.theme.devices.tablet}) {
        display: flex; 
        flex-direction: row;
    }
`
export const FooterBox = styled.div`
    display: flex; 
    flex-direction: column;

    @media screen and (${props => props.theme.devices.tablet}) {
    text-align: start;
    width: 267px;
    margin-right: 56px;
    }

    @media screen and (${props => props.theme.devices.desktop}) {
    margin-right: 93px;    
    }
`