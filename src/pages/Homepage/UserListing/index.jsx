import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';
import Loader from '../../../components/Loader';
import EmptyMessage from '../../../components/EmptyMessage';
import UserGrid from './UserGrid';

const UserListing = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const isLoading = users.loading;
    const hasData = users.data.length > 0;

    return (
        isLoading ? (
            <Loader />
        ) : hasData ? (
            <UserGrid users={users} />
        ) : (
            <EmptyMessage />
        )
    )
}

export default UserListing
