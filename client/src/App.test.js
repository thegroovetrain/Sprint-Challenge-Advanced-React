import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import WWCHeatTable from './components/WWCHeatTable';

test('renders without crashing', async () => {
  render(<App />);
});

test('HeatTable renders with dummy data', async () => {
  const dummyData = [
    {
      name: "Alex Morgan",
      country: "United States",
      searches: 100,
      id: 0
    },
    {
      name: "Megan Rapinoe",
      country: "United States",
      searches: 99,
      id: 1
    }
  ];
  render(<WWCHeatTable data={dummyData} />);
})

