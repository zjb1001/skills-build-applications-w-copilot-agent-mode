import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://literate-journey-x9qj56qgg4hv5px-8000.app.github.dev/api/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Workouts</h1>
      <ul className="list-group">
        {workouts.map(workout => (
          <li className="list-group-item" key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
