/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UserInfo } from '../types/UserInfo';
import apiClient from '../apiClient';

function useAllUsers() {
  return useQuery<UserInfo[], Error>(['users'], async () => {
    const { data } = await apiClient.get<UserInfo[]>('api/users');
    return data;
  });
}

export default function AllUsers() {
  const { data, isLoading, error } = useAllUsers();

  return (
    <div>
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <h1>All Users</h1>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error.message}</MessageBox>
      ) : data && data.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
