import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../hooks/useDebounce';

const SearchPostInput = ({ posts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredResults = posts.filter(({
        author,
        title,
        abstract,
      }) => author.toLowerCase().match(searchTerm)
      || title.toLowerCase().match(searchTerm)
        || abstract.toLowerCase().match(searchTerm));
      if (filteredResults.length) return setFilteredPosts(filteredResults);
      return setFilteredPosts([]);
    }
    setSearchTerm(undefined);
    return setFilteredPosts(posts);
  }, [debouncedSearchTerm]);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  return (
    // eslint-disable-next-line react/jsx-fragments
    <section className="search-input-section">
      <label htmlFor="search" className="search-input-label">Buscar</label>
      <input type="text" id="search" onChange={handleChange} className="search-input" />
    </section>
  );
};

SearchPostInput.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  setFilteredPosts: PropTypes.func.isRequired,
};

export default SearchPostInput;
