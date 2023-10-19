import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
    margin-bottom: 50px;
    @media screen and (${props => props.theme.devices.tablet}){
        margin-bottom: 36px;
    }
` 

export const Link = styled(NavLink)`
    display: flex;
`

