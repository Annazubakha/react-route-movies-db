import { useState } from 'react';
import { toast } from 'react-toastify';
export const SearchForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const handleChange = event => {
    setSearchText(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchText.trim() === '') {
      toast.info('Please enter your request');
      return;
    }
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchText"
        autoComplete="off"
        autoFocus
        placeholder="Search your movie"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
