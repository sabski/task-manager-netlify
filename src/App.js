import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Task manager</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/tasks-home">Tasks home</Link>
        <Link to="/user-prefs">User prefs</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
