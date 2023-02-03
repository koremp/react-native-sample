import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

const bottomNavigationItem = StyleSheet.create({
  button: {
    flex: 1,
  },
  selectedButton: {
    flex: 1,
  },
});

export default function BottomNavigationItem({
  icon,
  text,
  selected,
  handlePress,
}: {
  icon: any;
  text: string;
  selected: boolean;
  handlePress: () => void;
}) {
  return (
    <View
      style={
        selected
          ? bottomNavigationItem.selectedButton
          : bottomNavigationItem.button
      }>
      <Button onPress={() => handlePress()} title={text} />
    </View>
  );
}
