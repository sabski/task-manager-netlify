import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import UserPrefs from './pages/user-prefs';
import TaskHome from './pages/tasks-home';
import TaskEdit from './components/taskEdit';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/tasks-home" element={<TaskHome />} />
        <Route path='/task/create' element={<TaskEdit />}/>
        <Route path='/task/edit/:taskId' element={<TaskEdit />}/>
        <Route path="/user-prefs" element={<UserPrefs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);