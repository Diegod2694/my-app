import * as React from 'react';
import 'react-native-gesture-handler';
import moment from 'moment'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './screens/Register'
import ListScreen from './screens/List'

const Stack = createStackNavigator();

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: '15/09/2020',
    km: 14900,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    date: '10/01/2021',
    km: 33000,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    date: '15/03/2021',
    km: 44000,
  },
];

export default function App() {
  const [date, setDate] = React.useState(moment().format('DD/MM/YYYY'));
  const [km, setKm] = React.useState(null);
  const [data, setData] = React.useState(DATA);

  const addData = () => {
    const newData = {
      id: `${Math.random()}`,
      date,
      km,
    }
    setData([...data, newData])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro">
          {props => <RegisterScreen
            {...props}
            date={date}
            setDate={setDate}
            km={km}
            setKm={setKm}
            addData={addData}
          />}
        </Stack.Screen>
        <Stack.Screen name="Historial">
          {props => <ListScreen
            {...props}
            data={data}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
