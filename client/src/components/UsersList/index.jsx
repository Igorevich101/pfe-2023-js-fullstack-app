import React, { useState } from "react";

const UsersList = ({ users }) => {
  const usersItem = users.map((user) => (
    <UsersItem key={user.id} user={user} />
  ));

  return <div>{usersItem}</div>;
};

function UsersItem({ user }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article
      style={{
        border: "5px solid",
        borderColor: isFavorite ? "green" : "black",
      }}
    >
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <button onClick={() => setIsFavorite(!isFavorite)}>
        Toggle Favorite
      </button>
    </article>
  );
}

export default UsersList;
