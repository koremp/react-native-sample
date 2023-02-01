import React from 'react';

import { Button, StyleSheet } from 'react-native';

const bottomNavigationItem = StyleSheet.create({
  button: {},
  selectedButton: {},
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
    <Button onPress={() => handlePress()}>
      {icon}
      {text}
    </Button>
  );
}
