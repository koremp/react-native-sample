import React, { useState } from 'react';

import { Button, Text, View, StyleSheet } from 'react-native';

import { PageItem } from './interfaces/page';

import PAGES from './fixtures/pages';

import PageView from './components/PageView';

import BottomNavigationBar from './components/BottomNavigationBar';

const app = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});
export default function App() {
  const [selectedPage, setSelectedPage] = useState<string>(PAGES[0].text);

  const handlePress = (pageText: string) => {
    if (!PAGES.find(page => page.text === pageText)) {
      throw new Error(`${pageText} is not in PAGES.`);
    }

    setSelectedPage(pageText);
  };

  return (
    <View style={app.view}>
      <PageView page={selectedPage} />
      <BottomNavigationBar
        handlePress={handlePress}
        selectedPage={selectedPage}
      />
    </View>
  );
}
