import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const getData = (state: RootState) => state.data;

export const selectData = createSelector(getData, (data) => {
  return data.data;
});

export const selectedItems = createSelector(getData, (data) => {
  return data.selected;
});
export const selectedById = (id: string) =>
  createSelector(selectedItems, (data) => {
    return data.find((item=> item.id === id));
  });
  
