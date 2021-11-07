import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '../../../constants';
import ProfileScreen from '../../../modules/ProfileScreen';
import CarSwiperScreen from '../../../modules/CarSwiperScreen';
import CarListScreen from '../../../modules/CarListScreen';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../../hooks/useTheme';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const theme = useTheme();
  
  const navigation = useNavigation();
  const logOutHandler = () => {
    navigation.dispatch(StackActions.replace(routes.login));
  };
  return (
    <BottomTab.Navigator
      initialRouteName={routes.profile}
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          borderTopColor: theme.colors.ADDITIONAL,
          borderTopWidth: 2
        },
        tabBarActiveTintColor: theme.colors.PRIMARY,
        tabBarInactiveTintColor: theme.colors.ADDITIONAL
      }}
    >
      <BottomTab.Screen
        name={routes.carSwiper}
        component={CarSwiperScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => <MaterialIcons color={focused ? theme.colors.ICON_FOCUSED : theme.colors.ICON_NON_FOCUSED} size={25} name='directions-car' />,
          headerRight: () => (
            <View style={styles.headerRight}>
              <MaterialIcons size={30} name="logout" onPress={logOutHandler}/>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={routes.carList}
        component={CarListScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => <MaterialIcons color={focused ? theme.colors.ICON_FOCUSED : theme.colors.ICON_NON_FOCUSED} size={25} name='list' />,
          headerRight: () => (
            <View style={styles.headerRight}>
              <MaterialIcons size={30} name="logout" onPress={logOutHandler}/>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={routes.profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => <MaterialIcons color={focused ? theme.colors.ICON_FOCUSED : theme.colors.ICON_NON_FOCUSED} size={25} name='settings' />,
          headerRight: () => (
            <View style={styles.headerRight}>
              <MaterialIcons size={30} name="logout" onPress={logOutHandler}/>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10
  }
});

export default BottomTabNavigator;