import React from 'react';
import AddProperty from './AddProperty';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<AddProperty />);
});
