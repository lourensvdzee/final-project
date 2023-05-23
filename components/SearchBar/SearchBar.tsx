/* component/SearchBar/SearchBar.tsx
\ */

import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  SearchForm,
  SearchInput,
  SearchButton,
  Wrap,
  SearchIcon,
} from "./SearchBarStyles.js";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Wrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for products"
        />
        <SearchButton type="submit">
          <SearchIcon src="/search-icon.png" alt="Search Icon" />
        </SearchButton>
      </SearchForm>
    </Wrap>
  );
};

export default SearchBar;
