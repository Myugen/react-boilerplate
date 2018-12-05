import React from 'react';
import { shallow } from 'enzyme';

import '@babel/polyfill';

import Foo from '../Foo';

function setup() {
  const wrapper = shallow(<Foo />);
  return { wrapper };
}

describe('<Foo />', () => {
  it('renders a <p> element', () => {
    const { wrapper } = setup();
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
