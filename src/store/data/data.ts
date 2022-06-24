import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, initialData } from '../../api';

export interface DataState {
  data: Item[];
  selected: Item[];
}

const initialState: DataState = {
  data: initialData,
  selected: [],
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addSelected: (state: DataState, action: PayloadAction<Item>) => {
      state.selected = [...state.selected, action.payload];
    },
    removeSelected: (state: DataState, action: PayloadAction<{id: string}>) => {
      state.selected = [...state.selected].filter((item)=> item.id !== action.payload.id);
    },
  },
});

export const { actions, reducer } = data;
