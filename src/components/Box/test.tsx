import React from 'react';
import { shallow } from 'enzyme';

import Box from './index';

describe('Box', () => {
    it('Box 컴포넌트를 랜더링 한다', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper.text()).toEqual('BOX!');
    });
});
