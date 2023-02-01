export interface Page {
  icon: any;
  text: string;
}

export interface PageView extends Page {
  view: React.ReactNode;
}
