import styled from "@emotion/styled";

export const FormTitle = styled.p`
    color: ${props => props.theme.colors.white};

    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;

    @media screen and (${props => props.theme.devices.tablet}){
        text-align: start;
        line-height: 1.875;
    }
`
export const FormBox = styled.div`
    @media screen and (${props => props.theme.devices.tablet}){
        padding-left: 26px;
        margin-top: 39px;
        border-left: 5px solid ${props => props.theme.colors.white};
    }
`

export const FormInput = styled.input`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    max-width: 366px;
    width: 100%;
    padding: 3px 16px;
    margin: 27px 0 38px 0;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    @media screen and (${props => props.theme.devices.tablet}){
        max-width: 288px;
        margin: 0 0 40px 0;
    }

    @media screen and (${props => props.theme.devices.desktop}){
        max-width: 402px;
        margin-bottom: 38px;
    }

    &::placeholder {
        color: ${props => props.theme.colors.darkGray};
        
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
    }

    &:hover,
    :focus,
    :active {
        background-color: ${props => props.theme.colors.whiteButtonHover};
        color: ${props => props.theme.colors.primary};
        outline: none;
    }
`;

