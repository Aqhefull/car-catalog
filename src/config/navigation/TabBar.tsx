import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
        const isFocused = state.index === index;
        const TabIcon = options.tabBarIcon;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });
  
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
  
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const tabIconProps = {
          focused: isFocused
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:'center' }}
          >
            <TabIcon {...tabIconProps}/>
            <Text style={[styles.text, {color: isFocused ? '#222' : '#9E9E9E'}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#8A8A8E',
    borderTopWidth: 2
  },
  text: {
    fontSize: 10,
    color: '#222'
  }
});