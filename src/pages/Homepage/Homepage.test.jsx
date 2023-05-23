import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Homepage from '.';

const mockStore = configureStore([thunk]);

const initialState = {
    loading: false,
    data: [
        {
            _id: 1,
            firstName: 'Abhijeet',
            lastName: 'Ranmale',
            city: 'Nashik',
            email: 'abhijeet@gmail.com',
            phoneNumber: '7980586977',
            profileImage: 'path/to/image1.jpg'
        },
        {
            _id: 2,
            firstName: 'Test',
            lastName: 'User',
            city: 'Pune',
            email: 'testuser@gmail.com',
            phoneNumber: '7988445866',
            profileImage: 'path/to/image2.jpg'
        }
    ],
    error: '',
};

const errState = {
    loading: false,
    data: [],
    error: 'Network error',
};

const loadingState = {
    loading: true,
    data: [],
    error: '',
};

const store = mockStore(initialState);
const errorStore = mockStore(errState);
const loadingStore = mockStore(loadingState);

describe('Homepage with error', () => {

    beforeAll(() => {
        render(
            <Provider store={errorStore}>
                <Homepage />
            </Provider>
        );
    })

    test('Should render error message', () => {
        const headingElement = screen.getByText(/Network error/i);
        expect(headingElement).toBeInTheDocument();
    });
});

describe('Homepage with loader', () => {

    beforeAll(() => {
        render(
            <Provider store={loadingStore}>
                <Homepage />
            </Provider>
        );
    })

    test('Should render loader component', () => {
        const loadingElement = screen.getByLabelText('loader');
        expect(loadingElement).toBeInTheDocument();
    });
});

describe('Homepage with users data', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Homepage />
            </Provider>
        );
    })

    test('Should render heading', () => {
        const headingElement = screen.getByText(/User Listing/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('Should render user data cards', () => {
        const cardElement = screen.getAllByLabelText('user-card');
        expect(cardElement).toHaveLength(2);
    })

    test('The card should include all the data of user', () => {
        const userOneName = screen.getByText('Abhijeet Ranmale');
        const userTwoName = screen.getByText('Test User');
        const userOneEmail = screen.getByText('Email: abhijeet@gmail.com');
        const userTwoEmail = screen.getByText('Email: testuser@gmail.com');
        const userOnePhone = screen.getByText('Phone: 7980586977');
        const userTwoPhone = screen.getByText('Phone: 7988445866');
        const userOneCity = screen.getByText('City: Nashik');
        const userTwoCity = screen.getByText('City: Pune');
        const avatarElement = screen.getAllByLabelText('user-avatar');

        expect(userOneName).toBeInTheDocument();
        expect(userTwoName).toBeInTheDocument();
        expect(userOneEmail).toBeInTheDocument();
        expect(userTwoEmail).toBeInTheDocument();
        expect(userOnePhone).toBeInTheDocument();
        expect(userTwoPhone).toBeInTheDocument();
        expect(userOneCity).toBeInTheDocument();
        expect(userTwoCity).toBeInTheDocument();
        expect(avatarElement).toHaveLength(2);
    })
});