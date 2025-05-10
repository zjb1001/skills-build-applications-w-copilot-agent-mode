import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://literate-journey-x9qj56qgg4hv5px-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li className="list-group-item" key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
