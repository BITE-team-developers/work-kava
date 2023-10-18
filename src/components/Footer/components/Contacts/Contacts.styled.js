import styled from '@emotion/styled';

export const Box = styled.address`
    margin-bottom: 50px;
`

export const ContactsItem = styled.li` 

    &:not(:last-child) { 
        margin-bottom: 10px;
    } 
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
    flex-shrink: 0;

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.whiteButtonHover};
    }
`