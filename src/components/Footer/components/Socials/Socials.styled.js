import styled from '@emotion/styled';

export const Icons = styled.div`
    display: block;
    margin-bottom: 50px;
`

export const Title = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.0;
    color: ${props => props.theme.colors.white}; 
    margin-bottom: 25px;
`

export const IconsBox = styled.div`
    display: flex;
    gap: 14px;
    justify-content: center;
`

export const IconsButton = styled.a`

    & > svg {
        fill: ${props => props.theme.colors.white};
    }
    &:hover > svg,
    &:focus > svg {
        fill: ${props => props.theme.colors.whiteButtonHover};
    }
`