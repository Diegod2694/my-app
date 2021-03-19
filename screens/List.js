import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'galio-framework';

export default function List() {
  return (
    <View style={styles.container}>
      <Text>Oil Change App</Text>
      <Input
        rounded
        placeholder="theme"
        placeholderTextColor={theme.COLORS.THEME}
        style={{ borderColor: theme.COLORS.THEME }}
      />
      <Input
        rounded
        placeholder="info"
        placeholderTextColor={theme.COLORS.INFO}
        style={{ borderColor: theme.COLORS.INFO }}
      />
      <Button
        onPress={() => console.log('navegue')}
        title="Continuar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
