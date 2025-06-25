import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basic-component">Basic Components</Link>
        </li>
        <li>
          <Link to="/basic-hooks">Basic Hooks</Link>
        </li>
        <li>
          <Link to="/lifecycle">Lifecycle</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/advanced-statefull">Advanced Statefull</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
