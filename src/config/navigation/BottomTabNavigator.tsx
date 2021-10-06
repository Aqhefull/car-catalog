import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../../constants/routes';
import ProfileScreen from '../../modules/profile/ProfileScreen';
import CarSwiperScreen from '../../modules/carswiper/CarSwiperScreen';
import CarListScreen from '../../modules/carlist/CarListScreen';
import { StyleSheet, View } from 'react-native';
import TabBar from './TabBar';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const navigation = useNavigation();
  const logOutHandler = () => {
    navigation.dispatch(StackActions.replace(routes.login));
  };

  interface IScreenSettings {
    id: number;
    name: string;
    component: React.ComponentType;
    options: {
        tabBarIcon: {
            name: keyof typeof MaterialIcons.glyphMap,
            size: number
        }
    }
  }

  const ScreenSettings: IScreenSettings[] = [
    {
      id: 1,
      name: routes.carSwiper,
      component: CarSwiperScreen,
      options: {
        tabBarIcon: {
          name: 'directions-car',
          size: 25
        }
      }
    },
    {
      id: 2,
      name: routes.carList,
      component: CarListScreen,
      options: {
        tabBarIcon: {
          name: 'list',
          size: 25
        }
      }
    },
    {
      id: 3,
      name: routes.profile,
      component: ProfileScreen,
      options: {
        tabBarIcon: {
          name: 'settings',
          size: 25
        }
      }
    }
  ];
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={routes.tabs}
    >
      {
        ScreenSettings.map(({id, name, component, options}) => {
          const { tabBarIcon } = options;
          return component && <BottomTab.Screen
            key={id}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({ focused }: { focused: boolean }) => <MaterialIcons color={focused ? '#9E9E9E' : '#000'} size={tabBarIcon.size} name={tabBarIcon.name} />,
              headerRight: () => (
                <View style={styles.headerRight}>
                  <MaterialIcons size={30} name="logout" onPress={logOutHandler}/>
                </View>
              ),
            }}
          />;
        })
      }
    </BottomTab.Navigator>
  );
}


const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10
  }
});