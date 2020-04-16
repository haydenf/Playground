import React from 'react';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat <span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h2>Users in room:</h2>
            <div className="activeContainer">
              <h3> {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))} 
                </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
