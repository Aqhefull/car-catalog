import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import carImage from '../../../assets/images/car1.jpg';
import { MaterialIcons } from '@expo/vector-icons';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const CarSwiperScreen: React.FC = () => {
  const styles = useThemeStyleSheet(_styles);
  return (
    <View style={styles.container}>
      <View style={styles.mainImageWrap}>
        <Image style={styles.mainImage} source={carImage}/>
      </View>
      <View style={styles.controls}>
        <View style={styles.iconWrap}>
          <MaterialIcons size={50} name="star"/>
        </View>
        <View style={styles.iconWrap}>
          <MaterialIcons size={50} name="info"/>
        </View>
        <View style={styles.iconWrap}>
          <MaterialIcons size={50} name="close"/>
        </View>
      </View>
    </View>
  );
};

const _styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconWrap: {
    width: 70,
    height: 70,
    borderRadius: 0.5 * 70,
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.PRIMARY,
    borderWidth: 3,
  },
  mainImage: {
    resizeMode: 'cover',
    height: 270,
  },
  mainImageWrap: {
    flex: 1,
  },
  controls: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    flexDirection: 'row'
  }
});

export default CarSwiperScreen;