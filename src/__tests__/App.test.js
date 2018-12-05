import React from 'react';
import { shallow } from 'enzyme';

import '@babel/polyfill';

import App from '../App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('<App />', () => {
  it('renders an <img> element', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('renders a <p> element', () => {
    const { wrapper } = setup();
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
