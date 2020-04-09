import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App.component';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';



const mockStore = configureMockStore()


describe('<App> component', () => {
    test('Matches the snapshot', () => {
        const store = mockStore([thunk]);
        const AppPage = create(<Provider store={store}>
            <App />
        </Provider>)
        expect(AppPage.toJSON()).toMatchSnapshot()
    })
})