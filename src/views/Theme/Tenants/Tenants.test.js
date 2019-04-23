import React from 'react';
import Tenants from './Tenants';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<Tenants />);
});
