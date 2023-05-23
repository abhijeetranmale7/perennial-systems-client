import userReducer from '../reducers';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../types';

describe('userReducer', () => {
    const initialState = {
        loading: false,
        data: [],
        error: '',
    };

    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_USERS_REQUEST', () => {
        expect(userReducer(initialState, { type: FETCH_USERS_REQUEST })).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it('should handle FETCH_USERS_SUCCESS', () => {
        const usersData = [
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
        ];

        expect(userReducer(initialState, { type: FETCH_USERS_SUCCESS, payload: usersData })).toEqual({
            ...initialState,
            data: usersData,
        });
    });

    it('should handle FETCH_USERS_FAILURE', () => {
        const error = 'An error occurred';

        expect(userReducer(initialState, { type: FETCH_USERS_FAILURE, payload: error })).toEqual({
            ...initialState,
            error,
        });
    });
});