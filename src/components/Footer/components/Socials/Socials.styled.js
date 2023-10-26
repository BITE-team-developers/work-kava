import styled from '@emotion/styled';

export const Icons = styled.div`
    display: block;
    padding-bottom: 50px;

    @media screen and (${props => props.theme.devices.tablet}){
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
    }

`
export const Title = styled.p`
    font-size: 24px;
    line-height: 1.0;
    color: ${props => props.theme.colors.white}; 
    margin-bottom: 25px;

    @media screen and (${props => props.theme.devices.tablet}){
        margin-bottom: 36px;
        text-align: start;
        line-height: 1.875;
    }
`

export const IconsBox = styled.div`
    display: flex;
    gap: 14px;
    justify-content: center;

    @media screen and (${props => props.theme.devices.tablet}){
        border-left: 5px solid ${props => props.theme.colors.white};
        padding: 0 0 107px 26px;
        width: 282px;
        align-items: flex-start;
        margin-right: 57px;
    }

    @media screen and (${props => props.theme.devices.desktop}){
        margin-right: 94px;
    }
`