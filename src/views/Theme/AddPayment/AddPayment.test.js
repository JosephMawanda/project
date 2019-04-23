import React from 'react';
import AddPayment from './AddPayment';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<AddPayment />);
});
