import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import { Button, Input, Text, Card } from 'galio-framework';
import theme from './theme';
const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();

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

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text
        style={{
          marginVertical: theme.SIZES.FONT / 4
        }}
        h2
      >
        Oil Change App
      </Text>
      <View>
        <Input
          rounded
          placeholder="Fecha de Hoy"
          placeholderTextColor={theme.COLORS.INFO}
          style={styles.input}
        />
      </View>
      <View>
        
      </View>
      <Input
        rounded
        placeholder="Kilometraje"
        placeholderTextColor={theme.COLORS.INFO}
        style={styles.input}
      />
      <Button
        round
        color="warning"
        style={styles.button}
        onPress={() => navigation.push('Lista')}
      >
        Continuar
      </Button>
    </SafeAreaView>
  );
}

function DetailsScreen() {
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Lista"
          component={DetailsScreen}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    marginHorizontal: 20,
    borderColor: theme.COLORS.INFO,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 42,
  },
  containerScroll: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
