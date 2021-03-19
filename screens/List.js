import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Dimensions
} from 'react-native';
import { Card } from 'galio-framework';

import theme from '../theme';

const { width } = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: '10/01/2021',
    km: 100,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    date: '10/02/2021',
    km: 200,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    date: '10/03/2021',
    km: 300,
  },
];

export default function ListScreen() {

  const Item = ({ date, km }) => (
    <Card
      flex
      borderless
      shadowColor={theme.COLORS.BLACK}
      style={styles.card}
      caption={km}
      location={date}
    />
  );

  const renderItem = ({ item }) =>
    <View style={{ marginLeft: 10 }}>
      <Item
        date={item.date}
        km={item.km}
      />
    </View>

  return (
    <SafeAreaView style={styles.containerScroll}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE - 10,
    marginHorizontal: theme.SIZES.BASE - 10,
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
});