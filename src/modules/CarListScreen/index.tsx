import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native';
import Button from '../../components/Button/index';


const baseUrl = 'https://randomuser.me/api/?inc=picture,name';

const getUsers = async (
  count = 10,
  page  = 1,
  callback: (users: any) => void,
) => {
  const users = await fetch(`${baseUrl}&page=${page}&results=${count}`);
  const parsedUser = await users.json();
  parsedUser && callback(parsedUser.results);
};

const CarListScreen: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const ref: RefObject<FlatList> = useRef(null);

  useEffect(() => {
    getUsers(101, 1, setUsers);
  }, []);
  const renderCar = ({item, index}) => {
    return (
      <View style={styles.carContainer}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
          source={{
            uri: item.picture.medium
          }}
        />
        <Text style={{marginLeft: 25}}>
          {
            item.name.first
          }
        </Text>
      </View>
    );
  };

  const onPressScrollToEnd = () => {
    ref?.current?.scrollToEnd();
  }
  return (
    users ? <SafeAreaView style={styles.container}>
      <Button title="Scroll TO End" onPress={onPressScrollToEnd}/>
      <FlatList
        ref={ref}
        data={users}
        renderItem={renderCar}
        keyExtractor={(item: any, index: number) => `${index}`}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await getUsers(101, 1, setUsers);
          setRefreshing(false);
        }}
      />
    </SafeAreaView> : <ActivityIndicator size="large" style={styles.loadingIndicator}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
  },
  carContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15
  },
  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CarListScreen;