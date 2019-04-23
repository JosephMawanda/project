import React from 'react';
import Colors from './Expenses';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Colors />);
});
