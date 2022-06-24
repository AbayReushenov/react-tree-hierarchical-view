import React from 'react';
import { TreePage } from './TreePage/TreePage';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TreePage />
      </BrowserRouter>
    </>
  );
}
