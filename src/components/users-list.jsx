import User from "./user";

const UsersList = ({
  users = [],
  onClick,  
}) => {
  return (
    <div className="content">
      <h2>Users</h2>
      <form className="user-list">
        {Object.keys(users).map((key, index) =>
          <User
            key={key}
            uuid={key}
            username={users[key]}
            onClick={onClick}
          />
        )}
      </form>
    </div>
  );
};

export default UsersList;
