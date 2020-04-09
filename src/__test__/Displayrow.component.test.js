import React from 'react';
import { create } from 'react-test-renderer';
import Displayrow from '../Displayrow';


describe('<Displayrow> component', () => {
    test('Matches the snapshot', () => {
        const DisplayPage = create(
            <Displayrow />
        )
        expect(DisplayPage.toJSON()).toMatchSnapshot()
    })
})