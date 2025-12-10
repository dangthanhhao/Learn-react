import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = (props) => {
  if (!props.items || props.items.length === 0) {
    return <div className="center">No users found.</div>;
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.placeCount}
        ></UserItem>
      ))}
    </ul>
  );
};
export default UsersList;
