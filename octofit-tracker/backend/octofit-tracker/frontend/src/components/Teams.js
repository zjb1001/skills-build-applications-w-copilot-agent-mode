import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://literate-journey-x9qj56qgg4hv5px-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li className="list-group-item" key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
