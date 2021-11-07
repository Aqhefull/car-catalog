import { MaterialIcons } from '@expo/vector-icons';
import React,{ useState }  from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';
import { Input } from '../../components';
import ImagePicker from '../../components/ImagePicker';
import useTheme from '../../hooks/useTheme';

import useThemeStyleSheet from '../../hooks/useThemeStylesheet';
const rule = /^[a-zA-Z]+$/;

const ProfileScreen: React.FC = () => {
  const styles = useThemeStyleSheet(_styles);
  const [value, setValue] = useState('');
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <ImagePicker style={styles.avatar}/>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>
            Oleksandr Komarevych
          </Text>
          <Text style={styles.profileEmail}>
            test@gmail.com
          </Text>
        </View>
        <MaterialIcons 
          color={theme.colors.ICON_FOCUSED}
          size={25}
          name='settings'
          style={styles.settings}
        />
      </View>
      <Input placeholder="TextIn" rule={rule} value={value} onChangeText={setValue}/>
    </SafeAreaView>
  );
};

const _styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  profileHeader: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 15
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  profileInfo: {
    marginTop: 3,
    marginLeft: 10
  },
  profileName: {
    fontWeight: '700',
    fontSize: 20
  },
  profileEmail: {
    fontSize: 16,
    marginTop: 3,
    color: theme.colors.ADDITIONAL
  },
  settings: {
    marginTop: 3,
    marginLeft: 10
  }
});

export default ProfileScreen;