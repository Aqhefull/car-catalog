import { TextInput, ViewStyle } from 'react-native';

declare global {
    type InputProps = {
        value: string
        onChangeText: (text: string) => void
        placeholder?: string,
        editable?: boolean,
        icon?: JSX.Element,
        inputRef?: React.RefObject<TextInput>,
        rule: RegExp,
        style?: ViewStyle
    }
}