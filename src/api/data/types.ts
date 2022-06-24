import { Item } from '../index';

export const types: Item[] = [
  {
    id: 'type1',
    name: '#031',
    info: 'AMA1',
    children: [
      {
        id: 'type12',
        name: 'Name12',
        info: 'AMAK2',
        children: [],
      },
      {
        id: 'type13',
        name: 'Name13',
        info: 'AMAK3',
        children: [],
      },
      {
        id: 'type14',
        name: 'Name14',
        info: 'AMAK4',
        children: [],
      },
      {
        id: 'type15',
        name: 'Name15',
        info: 'AMAK5',
        children: [],
      },
    ],
  },
  {
    id: 'type2',
    name: '#032',
    info: 'AMA2',
    children: [
      {
        id: 'type21',
        name: 'Name21',
        info: 'AMAL1',
        children: [],
      },
      {
        id: 'type22',
        name: 'Name22',
        info: 'AMAL2',
        children: [],
      },
      {
        id: 'type23',
        name: 'Name23',
        info: 'AMAL3',
        children: [],
      },
      {
        id: 'type24',
        name: 'Name24',
        info: 'AMAL4',
        children: [],
      },
    ],
  },

  {
    id: 'type3',
    name: '#033',
    info: 'AMA3',
    children: [
      {
        id: 'type321',
        name: 'Name321',
        info: 'AMAS21',
        children: [],
      },
      {
        id: 'type322',
        name: 'Name322',
        info: 'AMAS22',
        children: [],
      },
      {
        id: 'type323',
        name: 'Name323',
        info: 'AMAS23',
        children: [],
      },
      {
        id: 'type324',
        name: 'Name324',
        info: 'AMAS24',
        children: [
          {
            id: 'type4323',
            name: 'Name4323',
            info: 'AMAX23',
            children: [],
          },
          {
            id: 'type4324',
            name: 'Name4324',
            info: 'AMAX24',
            children: [],
          },
        ],
      },
    ],
  },
];
