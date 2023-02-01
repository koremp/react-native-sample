import React from 'react';

import { Button, Text, View } from 'react-native';

import { Page, PageView } from './interfaces/page';

import PAGES from './components/pages';

export default function App() {
  const [page, setPage] = React.useState<PageView>(PAGES[0]);

  const handlePress = (pageText: string) => {
    const clickedPage = PAGES.find(item => item.text === pageText);

    if (clickedPage === undefined) {
      throw new Error('Pressed Button is not found!');
    }

    setPage(clickedPage);
  };

  return (
    <View>
      {page.view ? page.view : 'undefined page'}
      <BottomNavigationBar page={page} handlePress={handlePress} />
    </View>
  );
}
