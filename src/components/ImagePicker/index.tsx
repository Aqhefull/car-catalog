import React, { useState, useEffect } from 'react';
import { Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePickerExpo from 'expo-image-picker';
import Avatar from '../../../assets/icon.png';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const ImagePicker: React.FC<ImagePickerProps> = ({style}) => {
  const [image, setImage] = useState(null);
  const styles = useThemeStyleSheet(_styles);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePickerExpo.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      { image ? 
        <Image 
          source={{ uri: image }} 
          style={[styles.image, style]} 
        />
        : 
        <Image 
          source={Avatar} 
          style={[styles.image, style]} 
        />
      }
    </TouchableOpacity>
  );
};

const _styles = (theme: any) => StyleSheet.create({
  image: { width: 200, height: 200 }
});


export default ImagePicker;