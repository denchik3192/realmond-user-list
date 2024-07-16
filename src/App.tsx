import './App.css';
import Search from './components/Search/Search';
import UserList from './pages/UserList';

function App() {
  return (
    <>
      <h1>Users</h1>
      <Search />
      <UserList />
    </>
  );
}

export default App;
