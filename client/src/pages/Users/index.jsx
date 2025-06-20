import React from 'react';
import Header from '../../components/Header';
import UsersList from '../../components/UsersList';

const activeUsets = [
  {
    id: 1,
    firstName: 'Test 1',
    lastName: 'Testovich 1',
    imgSrc: 'test',
    email: 'test1@test.com',
    password: 'test',
    isMale: true,
  },
  {
    id: 2,
    firstName: 'Test 2',
    lastName: 'Testovich 2',
    imgSrc: 'test',
    email: 'test2@test.com',
    password: 'test',
    isMale: true,
  },
  {
    id: 3,
    firstName: 'Test 3',
    lastName: 'Testovich 3',
    imgSrc: 'test',
    email: 'test3@test.com',
    password: 'test',
    isMale: true,
  },
];

const UsersPage = (props) => {
  return (
    <>
      <Header />
      <section>
        <h1>Active users</h1>
        <UsersList users={activeUsets} />
      </section>
    </>
  );
};

export default UsersPage;
