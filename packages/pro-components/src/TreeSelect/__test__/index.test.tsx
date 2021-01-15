import * as React from 'react';
import { render } from '@testing-library/react';
import TreeSelect from '../index';

test('TreeSelect test', () => {
  const wrapper = render(<TreeSelect />);
  const el = wrapper.queryByText('pro-components TreeSelect');
  expect(el).toBeTruthy();
});
