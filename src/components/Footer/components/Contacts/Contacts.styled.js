import styled from '@emotion/styled';

export const Box = styled.address`
    width: 267px;

    @media screen and (${props => props.theme.devices.tablet}){
        border-left: 5px solid ${props => props.theme.colors.white
    };
`
export const ContactsList = styled.ul`
    padding-bottom: 50px;
    gap: 10px;
    display: flex;
    flex-direction: column;

    @media screen and (${props => props.theme.devices.tablet}){
        padding-bottom: 28px;
    }

    @media screen and (${props => props.theme.devices.desktop}){
        gap: 20px;
        padding-bottom: 0;
    }
}
`

export const ContactsItem = styled.li` 
`

export const ContactsLink = styled.a`
    color:  ${props => props.theme.colors.white};
    font-size: 22px;
    line-height: 1.5;
    font-style: normal;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (${props => props.theme.devices.tablet}){
        text-align: start;
        padding-left: 23px;
        justify-content: start;
    }

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.whiteButtonHover};
    }
`