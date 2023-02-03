import React from 'react';

import { View, StyleSheet } from 'react-native';

import PAGES from '../fixtures/pages';

import { PageItem } from '../interfaces/page';

import BottomNavigationItem from './BottomNavigationItem';

const bottomNavigationBar = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
  },
});

export default function BottomNavigationBar({
  handlePress,
  selectedPage,
}: {
  handlePress: (pageText: string) => void;
  selectedPage: string;
}) {
  return (
    <View style={bottomNavigationBar.view}>
      {PAGES.map(({ icon, text }: PageItem) => (
        <BottomNavigationItem
          handlePress={() => handlePress(text)}
          selected={selectedPage === text}
          key={text}
          icon={icon}
          text={text}
        />
      ))}
    </View>
  );
}
