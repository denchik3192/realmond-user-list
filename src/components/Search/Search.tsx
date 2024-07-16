import { useState } from 'react';
import s from './search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const onChaneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={s.searchBlock}>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Find user"
          value={value}
          onChange={onChaneInput}
        />
      </label>
    </div>
  );
};

export default Search;
