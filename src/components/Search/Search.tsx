import { memo } from 'react';
import s from './search.module.scss';

interface ISearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<ISearchProps> = memo(function Search({ searchValue, setSearchValue }) {
  const onChaneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={s.searchBlock}>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Find user"
          value={searchValue}
          onChange={onChaneInput}
        />
      </label>
    </div>
  );
});

export default Search;
