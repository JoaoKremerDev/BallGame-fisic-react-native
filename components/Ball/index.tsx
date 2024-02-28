import { View } from 'react-native';
import styles from './style';
type Props = {
    posY: number;
}

export const Ball = ({posY}:Props) => {


    return (
        <View style={[styles.container, { bottom: posY}]}>

        </View >
    )
}