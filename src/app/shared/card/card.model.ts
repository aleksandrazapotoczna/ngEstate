export interface Card {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  properties: Properties[];
  actionText: string;
  actionUrl: string;
}

interface Properties {
  key: string;
  value: string;
}
