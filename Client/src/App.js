import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import NavbarComp from './PagesAndComponents/NavbarComp';
import HomePage from './PagesAndComponents/HomePage';
import TodoPage from './PagesAndComponents/TodoPage';
import UsersPage from './PagesAndComponents/UsersPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
