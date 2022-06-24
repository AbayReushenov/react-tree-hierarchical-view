import { objects } from './data/objects';
import { system } from './data/system';
import { types } from './data/types';
export type Item = {
  id: string;
  name: string;
  info?: string;
  children: Item[];
};

export type Data = [
  objects: Array<Item>,
  system: Array<Item>,
  types: Array<Item>
];

export const initialData: Item[] = [
  {
    id: '-1',
    name: 'Oбъекты',
    children: objects,
  },
  {
    id: '-2',
    name: 'Система',
    children: system,
  },
  {
    id: '-3',
    name: 'Типы',
    children: types,
  },
];
