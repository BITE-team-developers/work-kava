import { Svg } from "components/SvgIcon/SvgIcon";
import {Icons, IconsButton, IconsBox} from "./Socials.styled";
import { Title } from "./Socials.styled";

export const Socials = () => {
    return(
        <Icons>
            <Title>We are on socials</Title>
            <IconsBox>
                <IconsButton href="https://www.twitter.com/" rel="noopener nofollow" target="_blank">
                    <Svg icon="twitter" w={40} h={40}/>
                </IconsButton>
                <IconsButton href="tg://resolve?domain" rel="noopener nofollow" target="_blank">
                    <Svg icon="telegram" w={40} h={40}/>
                </IconsButton>
                <IconsButton href="https://www.linkedin.com/in/" rel="noopener nofollow" target="_blank">
                    <Svg icon="linkedIn" w={40} h={40}/>
                </IconsButton>
                <IconsButton href="https://facebook.com/" rel="noopener nofollow" target="_blank">
                    <Svg icon="facebook" w={40} h={40}/>
                </IconsButton>
                <IconsButton href="https://www.instagram.com/" rel="noopener nofollow" target="_blank">
                    <Svg icon="instagram" w={40} h={40}/>
                </IconsButton>
            </IconsBox>
        </Icons>
    )
}