import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';

describe('App', () => {
    it('App 컴포넌트를 랜더링 한다', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toEqual('Test');
    });
});
