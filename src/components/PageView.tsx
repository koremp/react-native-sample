import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const pageView = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function PageView({ page }: { page: string }) {
  return (
    <View style={pageView.view}>
      <Text>{page}</Text>
    </View>
  );
}
