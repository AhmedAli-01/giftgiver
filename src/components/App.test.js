import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';

const app = shallow(<App />);

it('renders correctlt', () => {
    expect(app).toMatchSnapshot();
});