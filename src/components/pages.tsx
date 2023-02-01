import React from 'react';

import { View } from 'react-native';

import { Page, PageView } from '../interfaces/page';

const PAGE_TEXTS: Array<Page> = [
  {
    icon: '',
    text: 'HOME',
  },
  {
    icon: '',
    text: 'CALENDAR',
  },
  {
    icon: '',
    text: 'MY PAGE',
  },
  {
    icon: '',
    text: 'LIBRARY',
  },
];

const textToPageView = (text: string) => <View>{text}</View>;

const PAGES: Array<PageView> = Array.from(PAGE_TEXTS, ({ icon, text }: ) => {
  return {
    icon: icon,
    view: textToPageView(text),
    text: text,
  };
});

export default PAGES;
