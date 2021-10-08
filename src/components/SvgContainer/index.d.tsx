import { StyleProp, ImageStyle } from 'react-native';

declare global {
    type LogoProps = {
        logo: keyof JSX.IntrinsicElements,
        style?: StyleProp<ImageStyle>
    }
}