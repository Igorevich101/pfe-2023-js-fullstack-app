import React from 'react';

const UsersList = ({ users }) => {
  const usersItems = users.map((user) => (
    <article key={user.id}>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </article>
  ));
  return <div>{usersItems}</div>;
};

export default UsersList;
