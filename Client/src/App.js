import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavbarComp from './PagesAndComponents/NavbarComp';
import HomePage from './PagesAndComponents/HomePage';
import TodoPage from './PagesAndComponents/TodoPage';
import UsersPage from './PagesAndComponents/UsersPage';
import { AllUsersContextProvider } from './PagesAndComponents/AllUsersContext';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <AllUsersContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </AllUsersContextProvider>
      </Router>
    </div>
  );
}

export default App;
