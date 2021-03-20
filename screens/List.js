import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Dimensions
} from 'react-native';
import { Card, Button } from 'galio-framework';

import theme from '../theme';

const { width } = Dimensions.get('screen');

export default function ListScreen({ navigation, data }) {

  const Item = ({ date, km }) => (
    <Card
      flex
      borderless
      shadowColor={theme.COLORS.BLACK}
      style={styles.card}
      title={`Cambiado el ${date}`}
      caption={`${km} Kilometros`}
      avatar="https://cms-assets.tutsplus.com/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        round
        color="warning"
        style={styles.button}
        onPress={() => navigation.push('Registro')}
      >
        Nuevo Registro
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  button: {
    width: '90%',
    marginBottom: 45
  },
});