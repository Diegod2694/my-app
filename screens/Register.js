import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import {
  Button,
  Input,
  Text
} from 'galio-framework';
import { AntDesign } from '@expo/vector-icons';

import theme from '../theme'

export default function RegisterScreen({
  navigation,
  date,
  setDate,
  setKm,
  addData,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
        h2
      >
        Oil Change App
      </Text>
      <AntDesign name="carryout" size={90} color="black" />
      <View style={styles.inputContainer}>
        <Input
          rounded
          placeholder="Fecha de Hoy"
          onChangeText={setDate}
          value={date}
          placeholderTextColor={theme.COLORS.INFO}
          style={styles.input}
        />
        <Input
          rounded
          placeholder="Kilometraje"
          onChangeText={setKm}
          placeholderTextColor={theme.COLORS.INFO}
          style={styles.input}
        />
        <Button
          round
          color="warning"
          style={styles.buttonSuccess}
          onPress={() => {
            addData()
            navigation.push('Historial')
          }}
        >
          Confirmar Registro
        </Button>
        <Button
          round
          color="info"
          style={styles.buttonError}
          onPress={() => navigation.push('Historial')}
        >
          Historial
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  buttonSuccess: {
    width: '90%',
    marginTop: 45
  },
  buttonError: {
    width: '90%',
    marginTop: 5
  },
  input: {
    borderColor: theme.COLORS.INFO,
  },
  title: {
    marginVertical: 50,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});