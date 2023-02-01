import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Page, PageView } from '../interfaces/page';

import BottomNavigationItem from './BottomNavigationItem';

const bottomNavigationBar = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default function BottomNavigationBar({
  page,
  handlePress,
}: {
  page: PageView;
  handlePress: (pageText: string) => void;
}) {
  return (
    <View style={bottomNavigationBar.view}>
      {PAGES.map(({ icon, text }: Page) => (
        <BottomNavigationItem
          handlePress={() => handlePress(page.text)}
          selected={page.text === text}
          icon={icon}
          text={text}
        />
      ))}
    </View>
  );
}
