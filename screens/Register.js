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

export default function RegisterScreen({ navigation }) {
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
          placeholderTextColor={theme.COLORS.INFO}
          style={styles.input}
        />
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
  button: {
    width: '90%',
    marginTop: 45
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