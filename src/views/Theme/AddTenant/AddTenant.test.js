import React from 'react';
import AddTenant from './AddTenant';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<AddTenant />);
});
