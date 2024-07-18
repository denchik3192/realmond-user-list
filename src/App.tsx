import './App.scss';
import Search from './components/Search/Search';
import UserList from './components/UserList/UserList';
import useUsers from './hooks/useUsers';

function App() {
  const { searchValue, setSearchValue, filteredUsers, isLoading } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <UserList users={filteredUsers} isLoading={isLoading} />
    </div>
  );
}

export default App;
